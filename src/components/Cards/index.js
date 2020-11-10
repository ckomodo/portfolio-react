import React from 'react'
import "./style.css"

export default function Cards() {
    return (
        <div>
            <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src="images/vancouver.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  venU
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src="images/vancouver.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Patched
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src="images/vancouver.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Password Generator
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

        </div>
    )
}
