import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

const MovieCard = () => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <CardMedia image="" description="movie poster"></CardMedia>
          <Typography variant="h5"> Movie title</Typography>
          <Typography variant="subtitle2"> Movie description</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {" "}
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
