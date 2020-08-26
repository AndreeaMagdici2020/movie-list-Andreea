import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import img from "./../../MovieDetails/img.jpg";
import { IconButton, StylesProvider } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
// import MovieOverview from "./../../MovieDetails/MovieOverview";
import styles from "./MovieResultsListStyling.module.css";
const getPosterUrl = (imageUri) =>
  imageUri ? `https://image.tmdb.org/t/p/w200${imageUri}` : img;

const MoviesResultsList = (props) => (
  <div className={styles.MoviesResultsList}>
    {props.movies.map((item) => (
      <Card className={styles.moviesResultsListContainer} key={item.id}>
        <CardActionArea className={styles.cardActionArea}>
          <CardMedia
            className={styles.poster}
            image={getPosterUrl(item.poster_path)}
          />

          <CardContent className={styles.cardContent}>
            <Typography>
              Details <br /> Original title: {item.original_title}
            </Typography>
            <Typography>
              Release date:
              {item.release_date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={styles.cardActions}>
          <IconButton
            onClick={() => {
              props.onAdd(item);
            }}
          >
            <AddIcon />
          </IconButton>
        </CardActions>
      </Card>
    ))}
  </div>
);

export default MoviesResultsList;
