import { Link } from "react-router-dom";

export default function Cover({ item }) {
  return (
    <article className="cover">
      <figure>
        <img
          src={item.cover}
          alt={item.title}
        ></img>
        <div></div>
      </figure>
      <h2>{item.title}</h2>
      <Link to={`location/:${item.id}`}></Link>
    </article>
  );
}
