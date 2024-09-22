import type { Place } from "../../api/Place";
import { useState, Fragment } from "react";
import { Search } from "../../api/Search";

interface LocationProps {
  onPlaceClick: (place: Place) => void;
}

const LocationSearch = ({ onPlaceClick }: LocationProps) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState<string>("");
  console.log(places);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm("");
    const results = await Search(term);
    setPlaces(results);
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="text-2xl font-bold">Search</label>
        <input
          className="border border-yellow-500 rounded-md shadow-lg focus:border-orange-500 text-black w-52 p-2"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search Location"
        />
      </form>
      {places.length >= 1 && <h1 className="font-bold mt-6">Found Location</h1>}
      <div className="grid grid-cols-1fr_40px gap-2 mt-2 items-center">
        {places.map((place) => {
          return (
            <Fragment key={place.id}>
              <p className="text-sm">{place.name}</p>
              <button
                className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded"
                onClick={() => onPlaceClick(place)}
              >
                Go
              </button>
              <div className="border-b w-full col-span-2"></div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default LocationSearch;
