import React from "react";
import "./Navbar.css";
// import logo from "./movie-background-collage.jpg";
import logo2 from "./test.jpeg";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Jumbotron = () => {
    const containerStyle = {
        backgroundImage: `url(${logo2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return (<>
  <div
  className="p-5 text-center bg-image rounded-3"
  style={{
    backgroundImage: `url(${logo2})`,
    height: 600,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" ,padding:"10px"}}>
      <div className="text-white">
        <h1 className="mb-3">Tv Movies</h1>
        <h4 className="mb-3">Watch Now</h4>
        <a className="btn btn-outline-light btn-lg" href="#!" role="button">
          Call to action
        </a>
      </div>
    </div>
  </div>
</>
    )
};

export default Jumbotron;
