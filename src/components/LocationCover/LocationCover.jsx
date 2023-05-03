import { useState } from "react";

export default function LocationCover({ sources }) {
  const [count, setCount] = useState(0);

  const handleNext = () => {
    count < sources.length - 1 ? setCount(count + 1) : setCount(0);
  };

  const handlePrevious = () => {
    count > 0 ? setCount(count - 1) : setCount(sources.length - 1);
  };

  return (
    <section>
      <img
        src={sources[count]}
        alt="palceholder"
      ></img>
      <span>{`${count + 1}/${sources.length}`}</span>
      <button onClick={handlePrevious}>-</button>
      <button onClick={handleNext}>+</button>
    </section>
  );
}
