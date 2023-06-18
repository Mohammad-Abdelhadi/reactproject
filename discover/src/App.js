import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Movies } from "./information";
import './App.css';
import MovieDetails from './Components/MovieDetails';

import Error from './Components/Erorr';

// function generateRandomImageUrl(width, height) {
//   const randomImageNumber = Math.floor(Math.random() * 1000); // Generate a random number
//   return `https://picsum.photos/${width}/${height}?random=${randomImageNumber}`;
// }

function MovieList() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <div className="search-container">
        <div style={{ color: "white", padding: "10px", textAlign: "center" }}>
          <h1>Search Your movie..</h1>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="movie-list-container">
        {Movies.filter((movie) =>
          movie.title.toLowerCase().includes(search)
        ).map((movie) => (
          <div className="movie-card" key={movie.id}>
            <div className="movie-image">
              <img
                src={movie.imageUrl}
                alt="Movie Poster"
                className="movie-poster"
              />
               <div className="movie-rating">
              <span className="rating-value">{movie.rating}</span>
            </div>

            <span className="movie-duration">{movie.duration}</span>
            </div>
            <div className="movie-details">
              <div>
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-description">{movie.genre}</p>
              </div>
              <div className="watch-btn-container">
                <Link className="watch-link" to={`/movie/${movie.id}`}>More Information</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
