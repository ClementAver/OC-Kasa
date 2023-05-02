import { useParams } from "react-router-dom";

export default function Location() {
  const { id } = useParams();

  return (
    <div>
      <h1>Fiche {id}</h1>
    </div>
  );
}
