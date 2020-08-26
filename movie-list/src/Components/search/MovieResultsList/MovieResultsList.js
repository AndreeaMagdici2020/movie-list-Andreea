import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import img from "./../../MovieDetails/img.jpg";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
// import MovieOverview from "./../../MovieDetails/MovieOverview";
import styles from "./MovieResultsListStyling.module.css";
const getPosterUrl = (imageUri) =>
  imageUri ? `https://image.tmdb.org/t/p/w200${imageUri}` : img;

const MoviesResultsList = (props) => (
  <Grid container spacing={3} className={styles.MoviesResultsList}>
    {props.movies.map((item) => (
      <Grid item xs={12} sm={4} key={item.id}>
        <Card className={styles.moviesResultsListContainer} key={item.id}>
          <CardActionArea className={styles.cardActionArea}>
            <CardMedia
              className={styles.poster}
              image={getPosterUrl(item.poster_path)}
            />

            <CardContent className={styles.cardContent}>
              <Typography>
                <p>
                  Original title:
                  {item.original_title}
                </p>
              </Typography>
              <Typography>
                <p>Release date: {item.release_date}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={styles.cardActions}>
            <IconButton
              onClick={() => {
                props.onAdd(item);
              }}
            >
              <AddIcon className={styles.btn} />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default MoviesResultsList;
