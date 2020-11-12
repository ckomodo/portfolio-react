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
              Full Stack Software Developer based in Seattle, WA. Currently
              looking for position as a developer, intern or apprentice. I am a
              passionate about web development and have skills in Javascript,
              JQuery, Bootstrap, ReactJS, MongoDB, MySQL, Handlebars, CSS and
              HTML. Creating value in places I occupy and forming genuine
              relationships with people I come across is something I embrace
              every single day, and these enhance my skills to be a better
              developer.
            </p>
            <p>
              When I'm not coding, catch me doing burpees, exploring Seattle,
              writing poetry, playing the Nyatiti or making a new music
              playlist. Thank you for visiting my page, I hope we get to work
              together soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// add linkedIn and resume
