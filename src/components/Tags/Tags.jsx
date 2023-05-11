import Tag from "../Tag/Tag";

export default function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((i) => (
        <Tag
          key={i}
          tag={i}
        />
      ))}
    </div>
  );
}
