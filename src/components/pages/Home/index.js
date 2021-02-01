import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";

export default function Home() {
  return (
    <div className="homeBg textColor">
      {/* <img src="/images/FullSizeRender 2.jpeg"/> */}

      <div className="container containerStyle">
        <div className="row">
          <div className="col">
            <Card
              style={{ width: "18rem", float: "left", marginRight: "10px" }}
            >
              <Card.Img variant="top" src="./images/portrait.png" />
              {/* <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body> */}
            </Card>
            <p>
              Full stack web developer with skills in HTML, CSS, JavaScript, React, NodeJS, Mongo and MySQL. I earned a certificate in
              Web Development from the University of Washington Coding Bootcamp
              in 2020.
            </p>
            <p>
              My work experience involves roles in different industries
              including technology, tourism, non-profit and healthcare. Working
              in vastly unrelated fields, I learned that my greatest strength is
              being able to adapt easily to new environments. I embody new roles
              and responsibilities with a positive mindset while remaining
              focused on the bigger picture. The bootcamp was the hardest class
              I have ever taken yet, and it showed that I am a quick learner who
              embraces new challenges.
            </p>
            <p>
              I am seeking a role as a junior developer, intern or apprentice
              where I can be of value to the whole team. I enjoy coding websites
              and apps and learning all the different things I can do with
              JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// add linkedIn and resume
