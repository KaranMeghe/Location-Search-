import type { Place } from "../../api/Place";

interface MapProps {
  place: Place | null;
}

const Map = ({ place }: MapProps) => {
  return <div>{place?.name}</div>;
};

export default Map;
