import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LocationCover from "../../LocationCover/LocationCover";
import Tags from "../../Tags/Tags";
import Rating from "../../Rating/Rating";
import Collapse from "../../Collapse/Collapse";

export default function Location() {
  const { id } = useParams();

  const [locations, setLocations] = useState(null);

  useEffect(() => {
    fetch("../data/logements.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("server response error");
      })
      .then((res) => setLocations(res))
      .catch((err) => console.log(err));
  }, []);

  if (locations) {
    const location = locations.filter((item) => item.id === id.slice(1))[0];

    if (location) {
      return (
        <main className="location">
          <LocationCover sources={location.pictures} />
          <header>
            <div>
              <h1>{location.title}</h1>
              <span>{location.location}</span>
              <Tags tags={location.tags} />
            </div>
            <div>
              <div className="profile">
                <span>{location.host.name}</span>
                <img
                  src={location.host.picture}
                  alt={location.host.name}
                ></img>
              </div>
              <Rating
                className="rating"
                rating={location.rating}
              />
            </div>
          </header>
          <section className="collapse-location">
            <Collapse
              title="Description"
              labor={<p>{location.description}</p>}
            />
            <Collapse
              title="Équipements"
              labor={
                <ul>
                  {location.equipments.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              }
            />
          </section>
        </main>
      );
    } else {
      throw new Error("location isn't valid");
    }
  } else {
    return <p>Loading...</p>;
  }
}
