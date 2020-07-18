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
import Rating from "./Rating";
import img from "./img.jpg";
import { useHistory } from "react-router-dom";

const getPosterUrl = (imageUri) =>
  imageUri ? `https://image.tmdb.org/t/p/w200${imageUri}` : img;
const MovieCard = (props) => {
  const { movie, onDeleteItem, changeRating } = props;
  let history = useHistory();
  return (
    <Card
      style={{
        height: "800px",
        width: "450px",
        marginBottom: "20px",
      }}
    >
      <CardActionArea
        style={{
          width: "100%",
          height: "80%",
        }}
      >
        <CardMedia
          component="img"
          image={getPosterUrl(movie.poster_path)}
          title=""
          style={{
            maxHeight: "100%",
            maxWidth: "100",
            margin: "auto",
            display: "block",
          }}
        ></CardMedia>
        <CardContent style={{ width: "100%", height: "100px" }}>
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
      <CardActions style={{ width: "100%", height: "30%" }}>
        <Button
          size="small"
          color="primary"
          onClick={() => onDeleteItem(movie)}
        >
          Delete
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={() => history.push(`/details/${movie.id}`)}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
