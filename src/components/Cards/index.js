import React from 'react'
import "./style.css"

export default function Cards() {
    return (
        <div className="cardPos">
            <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src="images/Ven-U.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"><a href="https://ajm5099.github.io/Music-Discovery/">venU</a></h5>
                <p class="card-text">
                A music-discovery website for fans of live music. Watch live concerts of your favorite artists.
                </p> 
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src="images/patchedapp-homepage.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"><a href="https://patchedapp.herokuapp.com/">Patched</a></h5>
                <p class="card-text">
                Share and cultivating open spaces and gardens, inspired by Seattle's P-Patch program.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src="images/passwordGeneratorHomepage.png" class="card-img-top" alt="..." />
              <div class="card-body marginBottom">
                <h5 class="card-title"><a href="https://ckomodo.github.io/password-generator/">Password Generator</a></h5>
                <p class="card-text">
                Generate a random password of desired length and characters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

        </div>
    )
}
