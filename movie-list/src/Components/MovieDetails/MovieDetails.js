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
} from "@material-ui/core";
import styles from "./MovieDetailsStyling.module.css";

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
    <div>
      <Card className={styles.Card}>
        <CardActionArea>
          <CardContent>
            <CardMedia
              className={styles.cardMedia}
              image=""
              description="movie poster"
            >
              <img src={getPosterUrl(movie.poster_path)} alt="Movie poster" />
            </CardMedia>
            <Typography
              variant="h5"
              style={{ textAlign: "center", fontWeight: "Bold", color: "navy" }}
            >
              {movie.original_title}
            </Typography>
            <p style={{ textAlign: "center" }}>
              Details for movie {movie.original_title}
            </p>
          </CardContent>
        </CardActionArea>
        <button
          style={{
            marginLeft: "120px",
            fontSize: "17px",
            backgroundColor: "lightBlue",
          }}
        >
          <Link to="/">Home</Link>
        </button>
      </Card>
    </div>
  );
};
export default MovieDetails;
