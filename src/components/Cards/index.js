import React from "react";
import "./style.css";

export default function Cards() {
  return (
    <>
      <div className="cardPos">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div class="card" style={{ width: "18rem" }}>
                <img src="images/Ven-U.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="https://ajm5099.github.io/Music-Discovery/">
                      venU
                    </a>
                  </h5>
                  <p class="card-text">
                    A music-discovery website for fans of live music. Watch live
                    concerts of your favorite artists.
                  </p>
                  <button className="buttonRepo">
                    <a href="https://github.com/ajm5099/Music-Discovery">
                      Github Repository
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="images/patchedapp-homepage.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="https://patchedapp.herokuapp.com/">Patched</a>
                  </h5>
                  <p class="card-text">
                    Share and cultivating open spaces and gardens, inspired by
                    Seattle's P-Patch program.
                  </p>
                  <button className="buttonRepo">
                    <a href="https://github.com/ckomodo/garden-share">
                      Github Repository
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="images/passwordGeneratorHomepage.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body marginBottom">
                  <h5 class="card-title">
                    <a href="https://ckomodo.github.io/password-generator/">
                      Password Generator
                    </a>
                  </h5>
                  <p class="card-text">
                    Generate a random password of desired length and characters.
                  </p>
                  <button className="buttonRepo">
                    <a href="https://github.com/ckomodo/password-generator">
                      Github Repository
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cardPos">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="/images/dayPlanner.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="https://ckomodo.github.io/day-planner-app/">
                      Day Planner App
                    </a>
                  </h5>
                  <p class="card-text">
                    A quick and convenient way to schedule your day.
                  </p>
                  <button className="buttonRepo">
                    <a href="https://github.com/ckomodo/day-planner-app">
                      Github Repository
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="/images/employeeDirectory.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="https://the-money-makers.herokuapp.com">
                      Employee Directory
                    </a>
                  </h5>
                  <p class="card-text">
                    Search for any employee in a list of 200 staff members.
                  </p>
                  <button className="buttonRepo">
                    <a href="https://github.com/ckomodo/employee-directory">
                      Github Repository
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="/images/note taker.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body marginBttmNoteTaker">
                  <h5 class="card-title">
                    <a href="https://hidden-tor-41597.herokuapp.com/">
                      Note-Taker
                    </a>
                  </h5>
                  <p class="card-text">
                    Got some ideas you don't want to forget? Write and save them
                    in this easy to use note-taker app.
                  </p>
                  <button className="buttonRepo">
                    <a href="https://github.com/ckomodo/Note-Taker">
                      Github Repository
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
