import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header_container">
      <span className="">Space Launch Watcher</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/all">All</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
