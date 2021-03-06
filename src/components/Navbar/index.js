import React from "react";
// import { Link } from "react-router-dom";
import "./style.css"

export default function Navbar() {
  return (
    <div className = "Navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/home"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/contact"
                >Contact <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/portfolio"
                >Portfolio <span class="sr-only">(current)</span></a
              >
            </li>
          </ul>
          <a class="navbar-brand ml-auto" href="/">chris s. wesonga, full stack web developer</a>
        </div>
      </nav>
    </div>
  );
}
