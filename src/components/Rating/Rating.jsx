import Star from "../Star/Star";

export default function Rating({ rating }) {
  switch (rating) {
    case "1":
      return (
        <div className="rating">
          <Star color="#FF6060" />
          <Star color="#E3E3E3" />
          <Star color="#E3E3E3" />
          <Star color="#E3E3E3" />
          <Star color="#E3E3E3" />
        </div>
      );

    case "2":
      return (
        <div className="rating">
          <Star color="#FF6060" />
          <Star color="#FF6060" />
          <Star color="#E3E3E3" />
          <Star color="#E3E3E3" />
          <Star color="#E3E3E3" />
        </div>
      );

    case "3":
      return (
        <div className="rating">
          <Star color="#FF6060" />
          <Star color="#FF6060" />
          <Star color="#FF6060" />
          <Star color="#E3E3E3" />
          <Star color="#E3E3E3" />
        </div>
      );

    case "4":
      return (
        <div className="rating">
          <Star color="#FF6060" />
          <Star color="#FF6060" />
          <Star color="#FF6060" />
          <Star color="#FF6060" />
          <Star color="#E3E3E3" />
        </div>
      );

    case "5":
      return (
        <div className="rating">
          <Star color="#FF6060" />
          <Star color="#FF6060" />
          <Star color="#FF6060" />
          <Star color="#FF6060" />
          <Star color="#FF6060" />
        </div>
      );

    default:
      return <p>notation non indiquée</p>;
  }
}
