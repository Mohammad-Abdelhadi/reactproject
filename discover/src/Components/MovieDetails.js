import React from 'react';
import { useParams } from 'react-router-dom';
import { Movies } from "../information";
import { Favorite, Visibility, Share, PlayCircleOutline } from '@mui/icons-material';
import "./MovieDetalis.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Error from './Erorr';
const MovieDetails = () => {
  const { id } = useParams();
  const movie = Movies.find(info => info.id === Number(id));

  if (!movie) {
    return <div ><Error/></div>;
  }

  // const getRandomDuration = () => {
  //   const minMinutes = 80; // 1 hour and 20 minutes
  //   const maxMinutes = 180; // 3 hours
  //   const randomMinutes = Math.floor(Math.random() * (maxMinutes - minMinutes + 1)) + minMinutes;
  //   const hours = Math.floor(randomMinutes / 60);
  //   const minutes = randomMinutes % 60;
  //   return `${hours}h ${minutes}min`;
  // };

  return (
    <div className="movie-details">
      <div className="container">
        <div className="cellphone-container">
          <div className="movie">
            <div className="movie-img" style={{ backgroundImage: `url(${movie.imageUrl})` }}></div>
            <div className="text-movie-cont">
              <div className="mr-grid">
                <div className="col1">
                  <h1>{movie.title}</h1>
                  <ul className="movie-gen">
                    <li>{movie.releaseYear} /</li>
                    <li>{movie.duration} /</li>
                    <li>{movie.genre}</li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid summary-row">
                <div className="col2">
                  <h5>SUMMARY</h5>
                </div>
                <div className="col2">
                  <ul className="movie-likes">
                    <li><Favorite />124</li>
                    <li><Visibility />3</li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid">
                <div className="col1">
                  <p className="movie-description">A group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great Depression of the 1930's. The first one seen is an elderly woman stating her father was a farmer </p>
                </div>
              </div>
              <div className="mr-grid actors-row">
                <div className="col1">
                  <p className="movie-actors">Matthew McConaughey, Anne Hathaway, Jessica Chastain</p>
                </div>
              </div>
              <div className="mr-grid action-row">
                <div className="col2">
                  <div className="watch-btn">
                    <h6><PlayCircleOutline />WATCH TRAILER</h6>
                  </div>
                </div>
                <div className="col6 action-btn"><Favorite /></div>
                <div className="col6 action-btn"><Share /></div>
                <div className="col6 action-btn"><Visibility /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  );
}

export default MovieDetails;
