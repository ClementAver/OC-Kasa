// import { useState, useEffect } from "react";
// import Cover from "../../Cover/Cover";
import Banner from "../../Banner/Banner";
import Gallery from "../../Gallery/Gallery";

export default function Home() {
  // const [locations, setLocations] = useState("");

  // useEffect(
  //   () => async () => {
  //     const result = await fetch("../data/logements.json");
  //     const data = await result.json();
  //     setLocations(data);
  //   },
  //   []
  // );

  return (
    <section>
      <Banner
        src="assets/png/Banner.png"
        alt="placeholder"
        title="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </section>
  );
}
