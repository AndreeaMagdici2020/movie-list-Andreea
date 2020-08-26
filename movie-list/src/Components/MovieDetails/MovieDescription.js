import React, { useEffect, useState } from "react";
import getDetails from "./../../api/MovieService";
import { Link, useParams, useHistory } from "react-router-dom";
import img from "./img.jpg";
import styles from "./MovieDescriptionStyling.module.css";
import Grid from "@material-ui/core/Grid";
import { TextareaAutosize } from "@material-ui/core";

const getPosterUrl = (imageUri) =>
  imageUri ? `https://image.tmdb.org/t/p/w200${imageUri}` : img;
// `https://placehold.co/200x300`;
const getGenre = (movie) => {
  let genres;
  for (let key in movie) {
    if (key === "genres") {
      genres = movie[key][0];
      console.log("genres:", genres.name);
      return genres.name;
    }
  }
};
const getProductionCompanies = (movie) => {
  let companies;
  for (let key in movie) {
    if (key === "production_companies") {
      companies = movie[key];
      console.log("Production companies:", companies);
      return companies.map((item) => {
        return item.name + "," + " ";
      });
    }
  }
};
const MovieDescription = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  let history = useHistory();

  useEffect(() => {
    getDetails(id).then((results) => setMovie(results.data));
  }, [id]);
  return (
    <Grid container spacing={3} className={styles.divDescription}>
      <Grid
        item
        xs={12}
        sm={4}
        className={styles.divPicture}
        style={{ padding: "30px", margin: "30px" }}
      >
        <p>{movie.original_title} </p>

        <img
          className={styles.poster}
          src={getPosterUrl(movie.poster_path)}
          alt="Movie poster"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm
        className={styles.description}
        style={{ padding: "30px", margin: "30px" }}
      >
        <p>Movie Description</p>
        <span>Original Title:{"  "}</span>
        <span>{movie.original_title}</span>
        <br />
        <span>Release date: </span>
        <span>{movie.release_date}</span>
        <br />
        <span>Genre: {getGenre(movie)}</span>
        <br />
        <span>Production Companies: {getProductionCompanies(movie)}</span>
        <br />
        <span>Budget: {movie.budget} &#36;</span>
        <br />
        <span>Popularity: {movie.popularity}</span>
        <br />
        <br />
        <span>Overview:</span>
        <p className={styles.overview}>{movie.overview}</p>
        <br />

        <button className={styles.homeBtn}>
          <Link to="/">Back</Link>
        </button>
      </Grid>
    </Grid>
  );
};
export default MovieDescription;
