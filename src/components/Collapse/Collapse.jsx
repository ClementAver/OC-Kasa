import { useState } from "react";

export default function Collapse({ title, labor }) {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <article>
      <header onClick={handleClick}>
        <h2>{title}</h2>
        <button type="button">+</button>
      </header>
      {labor}
    </article>
  );
}
