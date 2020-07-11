import React, { useEffect, useState } from "react";
import getDetails from "./../../api/MovieService";
import { Link, useParams, useHistory } from "react-router-dom";
import img from "./img.jpg";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
const getPosterUrl = (imageUri) =>
  imageUri ? `https://image.tmdb.org/t/p/w200${imageUri}` : img;
// `https://placehold.co/200x300`;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  let history = useHistory();

  useEffect(() => {
    getDetails(id).then((results) => setMovie(results.data));
  }, [id]);
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <CardMedia image="" description="movie poster">
            <img src={getPosterUrl(movie.poster_path)} alt="Movie poster" />
          </CardMedia>
          <Typography variant="h5">{movie.original_title}</Typography>
          Details for movie {movie.original_title}
        </CardContent>
      </CardActionArea>
      <Link to="/">Home</Link>
    </Card>
  );
};
export default MovieDetails;
