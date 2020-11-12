import React from "react";
import portfolio from "./portfolio.json";
import "./style.css";

export default function Cards() {
  return (
    <div className="cardPos">
      <div className="container projContainer">
        {portfolio.map((proj) => (
          <div class="card projCard" style={{ width: "18rem" }}>
            <img src={proj.image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                <a href={proj.DeployedSite}>{proj.title}</a>
              </h5>
              <p class="card-text">{proj.description}</p>
              <button className="buttonRepo">
                <a href={proj.GithubRepo}>Github Repository</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
