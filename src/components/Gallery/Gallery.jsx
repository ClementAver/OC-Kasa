import Cover from "../Cover/Cover";

export default function Gallery({ locations }) {
  return (
    <main>
      {locations ? (
        locations.map((i) => (
          <Cover
            key={i.id}
            item={i}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
