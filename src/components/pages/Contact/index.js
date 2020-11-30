import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import "./style.css";
// import Background from "/Background";

// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'

export default function Contact() {
  return (
    <div>
      <div className="container containerStyle">
        <div className="row">
          <div className="col">
            <p></p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />
              chrissakwa@gmail.com
            </p>
            <p>
              {/* <img src="./images/github-mark.png" /> */}
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/ckomodo">Github profile</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faLinkedin} />
              <a href="https://www.linkedin.com/in/christopher-sakwa-410b341a/">
                LinkedIn
              </a>
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faBlog} />
              {/* <i class="fab fa-wordpress"></i> */}
              <a href="https://chrissakwa.wordpress.com">Blog</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faMobile} />
              484 597 2763
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
