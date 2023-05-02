import { Link } from "react-router-dom";

export default function Cover({ id, cover, title }) {
  return (
    <Link to={`location/:${id}`}>
      <article>
        <img
          src={cover}
          alt={title}
        ></img>
        <h2>{title}</h2>
      </article>
    </Link>
  );
}
