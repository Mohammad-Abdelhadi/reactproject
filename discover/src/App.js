import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Movies } from "./information";
import './App.css';
import MovieDetails from './Components/MovieDetails';
import Footer from './Components/Footer';

function generateRandomImageUrl(width, height) {
  const randomImageNumber = Math.floor(Math.random() * 1000); // Generate a random number
  return `https://picsum.photos/${width}/${height}?random=${randomImageNumber}`;
}

function MovieList() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <div className="search-container">
        <div style={{color:"red",padding:"10px"}}>  <h1>Search Your movie..</h1> </div>
        <input type="text" placeholder="Search..." className="search" onChange={e => setSearch(e.target.value)} />
      </div>
      <div className="movie-list-container">
        <ul className="list">
          {Movies.filter(movie => movie.title.toLowerCase().includes(search)).map(movie => (
            <li className="card" key={movie.id}>
              <Link to={`/movie/${movie.id}`} style={{fontSize:"10px"}}>
                <img src={generateRandomImageUrl(200, 300)} alt={movie.title} className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{movie.title}</h3>
                  <p className="card-genre">Genre: {movie.genre}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} /> // Route for the movie list page
        <Route path="/movie/:id" element={<MovieDetails />} /> // Route for the movie details page
      </Routes>
    </Router>
  );
}

export default App;
