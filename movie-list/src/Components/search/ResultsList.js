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
        <Grid className={styles.gridImg} item xs={4}>
          <img src={getPosterUrl(item.poster_path)} className={styles.poster} />
          <div id="mOverv" style={{ display: "block" }}>
            <MovieOverview item={item} />
          </div>
        </Grid>
        <Grid className={styles.gridTitle} item xs={3}>
          <p>
            Original Title: <br />
            {item.original_title}
          </p>
        </Grid>
        <Grid className={styles.gridRelease} item xs={3}>
          <p>
            {" "}
            Release date: <br></br>
            {item.release_date}
          </p>
        </Grid>
        <Grid className={styles.gridButton} item xs={2}>
          <IconButton
            onClick={() => {
              props.onAdd(item);
            }}
          >
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    ))}
  </React.Fragment>
);

export default ResultsList;
