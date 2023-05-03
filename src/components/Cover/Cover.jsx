import { Link } from "react-router-dom";

export default function Cover({ item }) {
  return (
    <Link to={`location/:${item.id}`}>
      <article>
        <img
          src={item.cover}
          alt={item.title}
        ></img>
        <h2>{item.title}</h2>
      </article>
    </Link>
  );
}
