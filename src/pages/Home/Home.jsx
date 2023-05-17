import { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";

export default function Home() {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    fetch("data/logements.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("server response error");
      })
      .then((res) => setLocations(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Banner
        src="assets/png/Banner_Home.png"
        alt="Sea shore and forest."
        title="Chez vous, partout&nbsp;et&nbsp;ailleurs"
      />
      {locations ? <Gallery locations={locations} /> : <p>Loading...</p>}
    </section>
  );
}
