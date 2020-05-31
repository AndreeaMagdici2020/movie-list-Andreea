import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import wall3 from "./wall3.jpg";
import Rating from "./Rating";
import styles from "./MovieCard.module.css";
import img from "./img.jpg";

const getPosterUrl = (imageUri) =>
  imageUri ? `https://image.tmdb.org/t/p/w200${imageUri}` : img;
const MovieCard = (props) => {
  const { movie, onDeleteItem, changeRating } = props;
  return (
    <Card className={styles.card}>
      <CardActionArea className={styles.cardactionarea}>
        <CardMedia
          className={styles.cardmedia}
          component="img"
          //image={wall3}
          image={getPosterUrl(movie.poster_path)}
          title=""
        ></CardMedia>
        <CardContent>
          <Typography variant="h5">{movie.original_title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {movie.release_date}
          </Typography>
          <div>
            <Rating
              key={Math.ceil(Math.random() * 10000)}
              userRating={props.movie.userRating}
              changeRating={changeRating}
              savedRating={props.savedRating}
              movie={props.movie}
            />
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.cardactions}>
        <Button
          size="small"
          color="primary"
          onClick={() => onDeleteItem(movie)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
