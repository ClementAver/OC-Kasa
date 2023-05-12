import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar() {
  const location = useLocation();

  const [nav, setNav] = useState({ home: "", about: "" });

  useEffect(() => {
    switch (window.location.href) {
      case "http://localhost:3000/":
        setNav({ home: "underlined", about: "" });
        break;
      case "http://localhost:3000/about":
        setNav({ home: "", about: "underlined" });
        break;
      default:
        setNav({ home: "", about: "" });
    }
  }, [location]);

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
