export default function Banner({ src, alt, title }) {
  return (
    <header className="banner">
      <img
        src={src}
        alt={alt}
      ></img>
      <div></div>
      <h1>{title}</h1>
    </header>
  );
}
