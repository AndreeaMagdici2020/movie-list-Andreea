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
        width: "80%",
        height: "auto",
        marginBottom: "30px",
        boxShadow: "11px 11px 9px  #D3D3D3",
      }}
    >
      <CardActionArea
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <CardMedia
          component="img"
          image={getPosterUrl(movie.poster_path)}
          title=""
          style={{
            height: "auto",
            maxWidth: "100%",
            margin: "auto",
            display: "block",
          }}
        ></CardMedia>
        <CardContent
          style={{
            width: "100%",
            height: "70px",
            overflow: "auto",
            marginTop: "3px",
            marginBottom: "3px",
          }}
        >
          <Typography variant="h6" style={{ fontSize: "1vw" }}>
            {movie.original_title}
          </Typography>
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
      <CardActions
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          size="large"
          color="primary"
          onClick={() => onDeleteItem(movie)}
        >
          Delete
        </Button>
        <Button
          size="large"
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
