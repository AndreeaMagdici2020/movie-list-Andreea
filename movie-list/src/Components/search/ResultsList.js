import React from "react";
import img from "./img.jpg";
import { IconButton, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styles from "./ResultsList.module.css";
import MovieOverview from "./../MovieDetails/MovieOverview";
const getPosterUrl = (imageUri) =>
  imageUri ? `https://image.tmdb.org/t/p/w200${imageUri}` : img;
// `https://placehold.co/200x300`;
// const showMovieDetails = () => {
//   return (
//     <div>
//       <MovieDescription />
//     </div>
//   );
// };

const ResultsList = (props) => (
  <React.Fragment>
    {props.movies.map((item) => (
      <Grid className={styles.gridContainer} container key={item.id}>
        <Grid item xs={2}>
          <img src={getPosterUrl(item.poster_path)} className={styles.poster} />
        </Grid>
        <Grid item xs={2}>
          <p>
            {" "}
            Original Title: <br />
            {item.original_title}
          </p>
        </Grid>
        <Grid item xs={2}>
          <p> Release date: {item.release_date}</p>
        </Grid>
        <Grid item xs={2}>
          <IconButton
            onClick={() => {
              props.onAdd(item);
            }}
          >
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <div id="mOverv" style={{ display: "flex" }}>
            <MovieOverview item={item} />
          </div>
        </Grid>
      </Grid>
    ))}
  </React.Fragment>
);

export default ResultsList;
