import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

export default function Navbar() {
  return (
    <div className = "Navbar">
        <Link to="/">
          <img src="/images/smallLogo.png" alt="logo" />
        </Link>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">Home</Link>
        <Link to="contact">Contact</Link>
        <Link to="portfolio">Portfolio</Link>
      </nav>
    </div>
  );
}
