import React from "react";
import "./Navbar.css";
// import logo from "./movie-background-collage.jpg";
import logo2 from "./images.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Jumbotron = () => {
    const containerStyle = {
        backgroundImage: `url(${logo2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <div className="p-5 mb-4  " style={containerStyle}>
            <div className="container-fluid  py-5">
                <h1 className="display-5 text-white fw-bold">TvWatch</h1>
                <p className="col-md-8 text-white fs-4">Ignite your love for movies with our stunning jumbotron, bringing the silver screen to life with its enchanting visuals and thrilling previews.




</p>
            </div>
        </div>
    );
};

export default Jumbotron;
