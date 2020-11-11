import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";

export default function Home() {
  return (
    <div className="homeBg textColor">
      <h1>chris s. wesonga, </h1>
      <h1>full stack web developer</h1>
      {/* <img src="/images/FullSizeRender 2.jpeg"/> */}

      <div className="container containerStyle">
        <div className="row">
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="./portrait.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            Lorem ipsum dolor sit amet, per ut volumus intellegebat. Quas dicta
            discere sed an, ad eam stet putent ancillae, nam tollit
            interpretaris at. Sea in legimus scripserit temporibus. Ea eos
            albucius percipit petentium, ea mea clita causae, modo utinam
            invenire mea cu. Eam cu inani delenit scripserit, oratio mediocrem
            intellegat in nam.
          </div>
        </div>
      </div>
    </div>
  );
}
