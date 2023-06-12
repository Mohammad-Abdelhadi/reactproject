import React from 'react';
import { useParams } from 'react-router-dom';
import { Movies } from "../information";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = Movies.find(info => info.id === Number(id));

  if (!movie) {
    return <div style={{color:"red",display:"flex",justifyContent:"center"}}>Movie not found.</div>;
  }

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
 
  };

  const imageStyle = {
    width: '400px',
    height: '300px',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  const titleStyle = {
    color: 'black',
  };

  const textStyle = {
    color: 'black',
  };

  return (
    <div className="movie-details">
      <div style={cardStyle}>
        <img src={movie.imageUrl} alt={movie.title} style={imageStyle} />
        <h2 style={titleStyle}>{movie.title}</h2>
        <p style={textStyle}>Genre: {movie.genre}</p>
        <p style={textStyle}>Director: {movie.director}</p>
        <p style={textStyle}>Release Year: {movie.releaseYear}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
