import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { setSearchTerm } = useGlobalContext();

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link onClick={() => setSearchTerm("a")} to="/">
          <img src={logo} alt="cocktail db logo" className="logo"></img>
        </Link>
        <ul className="nav-links">
          <li>
            <Link onClick={() => setSearchTerm("a")} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
