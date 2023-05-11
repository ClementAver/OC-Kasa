import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [nav, setNav] = useState({ url: `${window.location.href}`, home: "", about: "" });

  window.addEventListener("change", () => {
    switch (window.location.href) {
      case "http://localhost:3000/":
        console.log(window.location.href);
        setNav({ url: `${window.location.href}`, home: "underlined", about: "" });
        break;
      case "http://localhost:3000/about":
        console.log(window.location.href);
        setNav({ url: `${window.location.href}`, home: "", about: "underlined" });
        break;
      default:
        return null;
    }
  });

  return (
    <nav>
      <Link
        className={nav.home}
        to="/"
      >
        Accueil
      </Link>
      <Link
        className={nav.about}
        to="/about"
      >
        À propos
      </Link>
    </nav>
  );
}
