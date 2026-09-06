import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        Power-Drive
      </Link>

      <ul className="nav-menu">
        <li>
          <Link className={isActive("/")} to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className={isActive("/explore")} to="/explore">
            Explore
          </Link>
        </li>

        <li>
          <Link className={isActive("/about")} to="/about">
            About
          </Link>
        </li>

        <li className="nav-contact">
          <Link
            className={isActive("/contact")}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;