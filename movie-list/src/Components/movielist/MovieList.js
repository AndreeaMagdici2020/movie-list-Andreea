import React from "react";
import { Typography } from "@material-ui/core";
import MovieCard from "./MovieCard";
const keygenerator = () => {
  Math.ceil(Math.random() * 10000);
};
class MovieList extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.savedMovies.length > 0
          ? this.props.savedMovies.map((item) => (
              <MovieCard
                key={keygenerator()}
                movie={item}
                onDeleteItem={this.props.onMovieDelete}
                changeRating={this.props.changeRating}
                savedRating={this.props.savedRating}
              />
            ))
          : "Search for a movie and add it to your list."}
      </React.Fragment>
    );
  }
}

export default MovieList;
