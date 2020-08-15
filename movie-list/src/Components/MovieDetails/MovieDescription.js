import React, { useEffect, useState } from "react";
import getDetails from "./../../api/MovieService";
import { Link, useParams, useHistory } from "react-router-dom";
import img from "./img.jpg";
import styles from "./MovieDescriptionStyling.module.css";

const getPosterUrl = (imageUri) =>
  imageUri ? `https://image.tmdb.org/t/p/w200${imageUri}` : img;
// `https://placehold.co/200x300`;

const MovieDescription = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  let history = useHistory();

  useEffect(() => {
    getDetails(id).then((results) => setMovie(results.data));
  }, [id]);
  return (
    <div className={styles.divDescription}>
      <h1>{movie.original_title} - Movie Description</h1>
      <div className={styles.divPicture}>
        <img
          className={styles.poster}
          src={getPosterUrl(movie.poster_path)}
          alt="Movie poster"
        />
      </div>
      <div className={styles.description}>
        <span>Original Title:{"  "}</span>
        <span>{movie.original_title}</span>
        <br />
        <span>Release date: </span>
        <span>{movie.release_date}</span>
        <br />
        <span>Overview:</span>
        <p>{movie.overview}</p>
        <span>Homepage:</span>{" "}
        <a href={movie.homepage}>Visit movie homepage!</a>
        <br />
        <button className={styles.homeBtn}>
          <Link to="/">Back</Link>
        </button>
      </div>
    </div>
  );
};
export default MovieDescription;
