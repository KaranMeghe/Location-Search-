import type { Place } from "../../api/Place";
import { useState } from "react";
import { Search } from "../../api/Search";

interface LocationProps {
  onPlaceClick: (place: Place) => void;
}

const LocationSearch = ({ onPlaceClick }: LocationProps) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm("");
    Search(term);
    console.log("Searching Location: Api Call");
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label className="text-2xl font-bold">Search</label>
      <input
        className="border border-green-500 rounded-md shadow-lg focus:border-orange-500 text-black w-52 p-2"
        id="term"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search Location"
      ></input>
    </form>
  );
};

export default LocationSearch;
