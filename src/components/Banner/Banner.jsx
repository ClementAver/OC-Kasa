export default function Banner({ src, alt, title }) {
  return (
    <header>
      <img
        src={src}
        alt={alt}
      ></img>
      <h1>{title}</h1>
    </header>
  );
}
