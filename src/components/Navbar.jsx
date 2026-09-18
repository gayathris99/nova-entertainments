import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`nav${menuOpen ? " menu-open" : ""}`}>
      <NavLink to="/" className="logo" aria-label="Nova Entertainments">
        <img
          className="logo-image"
          src="/assets/branding/novologo.png"
          alt="Nova Entertainments"
        />
      </NavLink>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav
        className="navlinks"
        id="main-navigation"
        aria-label="Main navigation"
      >
        <NavLink
          to="/events"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          EVENTS
        </NavLink>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          CONTACT US
        </a>
      </nav>
    </header>
  );
}
