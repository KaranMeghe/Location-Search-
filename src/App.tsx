import type { Place } from "./api/Place";
import { Map, LocationSearch } from "./Components";
import { useState } from "react";

function App() {
  const [place, setPlace] = useState<Place | null>(null);
  return (
    <>
      <main className="bg-slate-800 h-[100vh] text-white w-screen grid grid-cols-12 px-2">
        <article className="col-span-3 p-2">
          <LocationSearch onPlaceClick={(p) => setPlace(p)} />
        </article>
        <article className="col-span-9">
          <Map place={place} />
        </article>
      </main>
    </>
  );
}

export default App;
