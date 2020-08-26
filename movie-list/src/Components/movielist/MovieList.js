import React from "react";
import MovieCard from "./MovieCard";
import Grid from "@material-ui/core/Grid";

const keygenerator = () => {
  Math.ceil(Math.random() * 10000);
};
class MovieList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={1}>
          {this.props.savedMovies.length > 0
            ? this.props.savedMovies.map((item) => (
                <Grid item xs={12} sm={4} key={Math.random() * 10000}>
                  <MovieCard
                    key={keygenerator()}
                    movie={item}
                    onDeleteItem={this.props.onMovieDelete}
                    changeRating={this.props.changeRating}
                    savedRating={this.props.savedRating}
                  />
                </Grid>
              ))
            : "Search for a movie and add it to your list."}
        </Grid>
      </React.Fragment>
    );
  }
}

export default MovieList;
