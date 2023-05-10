import { useState } from "react";
import StyledButton from "../Button/Button";

export default function LocationCover({ sources }) {
  const [count, setCount] = useState(0);

  const handleNext = () => {
    count < sources.length - 1 ? setCount(count + 1) : setCount(0);
  };

  const handlePrevious = () => {
    count > 0 ? setCount(count - 1) : setCount(sources.length - 1);
  };

  if (sources.length > 1) {
    return (
      <section className="location-cover">
        <img
          src={sources[count]}
          alt="palceholder"
        ></img>
        <span>{`${count + 1}/${sources.length}`}</span>
        <StyledButton onClick={handlePrevious}>
          <svg
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            filter="drop-shadow(0.1rem 0.1rem 0.1rem hsla(0, 0%, 0%, 0.5))"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
        </StyledButton>
        <StyledButton onClick={handleNext}>
          <svg
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            filter="drop-shadow(0.1rem 0.1rem 0.1rem hsla(0, 0%, 0%, 0.5))"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </StyledButton>
      </section>
    );
  } else {
    return (
      <section className="location-cover">
        <img
          src={sources[count]}
          alt="palceholder"
        ></img>
      </section>
    );
  }
}
