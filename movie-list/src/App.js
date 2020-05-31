import React from "react";
import Header from "./shared/header/Header";
import { Grid, Container } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import MovieList from "./Components/movielist/MovieList";
import Search from "./Components/search/Search";
const keygenerator = () => {
  Math.ceil(Math.random() * 10000);
};
class App extends React.Component {
  state = {
    savedMovies: [],
    savedRating: [],
  };

  componentDidMount() {
    const saved = localStorage.getItem("userData");
    const userDetails = localStorage.getItem("userDetails");
    const savedRating = localStorage.getItem("savedRating");

    if (userDetails) {
      const parsedUser = JSON.parse(userDetails);
      this.setState({
        user: parsedUser,
      });
    } else {
      console.log("redirect to login");
    }
    if (saved) {
      const parsed = JSON.parse(saved);
      this.setState({
        savedMovies: parsed.savedMovies,
      });
    }
    if (savedRating) {
      const parsedRating = JSON.parse(savedRating);
      this.setState({ savedRating: parsedRating });
    }
  }

  onMovieAdd = (movie) => {
    const movies = this.state.savedMovies;
    movies.push(movie);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        savedMovies: movies,
      })
    );

    this.setState({
      savedMovies: movies,
    });
  };

  handleAddUser = (event) => {
    localStorage.setItem(
      "userDetails",
      JSON.stringify({
        userName: this.state.userName,
      })
    );

    this.setState({
      user: {
        userName: this.state.userName,
      },
      userName: null,
    });
  };

  onUserChange = (event) => {
    const { value } = event.target;
    this.setState({
      userName: value,
    });
  };
  //changeRating = (title, userRating) => {
  // varinata mea: console.log(userRating);
  // console.log(title);
  // const moviesRating = this.state.savedRating;
  // moviesRating.push({ title, userRating });
  // this.setState({ savedRating: moviesRating });
  // localStorage.setItem(
  //   "savedrating",
  //   JSON.stringify({ savedRating: moviesRating })
  // );
  //=====

  // };

  changeRating = (rating, movieId) => {
    const foundIndex = this.state.savedMovies.findIndex(
      (item) => item.id === movieId
    );
    const { savedMovies } = this.state;
    const movie = savedMovies[foundIndex];
    savedMovies[foundIndex] = Object.assign({}, movie, { userRating: rating });
    this.setState({
      savedMovies: savedMovies,
    });
    localStorage.setItem(
      "userData",
      JSON.stringify({ savedMovies: savedMovies })
    );
    console.log(this.state.savedMovies[foundIndex]);
  };
  //in arrayul cu movies din localstorage - adaug un element cheie valoare rating;
  logout = () => {
    this.setState({ user: null });
    localStorage.removeItem("userDetails");
  };
  onMovieDelete = (movie) => {
    const movies = this.state.savedMovies;
    console.log("movies:", movies);
    movies.splice(movies.indexOf(movie), 1);
    var index = movies.indexOf(movie);
    console.log("index:", index);
    console.log("deleted movie:", movies.indexOf(movie));
    console.log("movies:", movies);
    localStorage.setItem("userData", JSON.stringify({ savedMovies: movies }));
    this.setState({
      savedMovies: movies,
    });
  };

  render() {
    const { savedMovies, user } = this.state;
    return (
      <div className="App">
        <Header user={user} onLogout={this.logout} />
        {user ? (
          <React.Fragment>
            <Container maxWidth="md">
              <Search onMovieAdd={this.onMovieAdd} />
            </Container>
            <Container maxWidth="md">
              <MovieList
                key={keygenerator()}
                savedMovies={savedMovies}
                onMovieDelete={this.onMovieDelete}
                savedRating={this.state.savedRating}
                changeRating={this.changeRating}
              />
            </Container>
          </React.Fragment>
        ) : (
          <Container maxWidth="md">
            <h2>Hello stranger!</h2>
            <h4>What is your name?</h4>
            <TextField label="Name" onChange={this.onUserChange} />
            <Button variant="contained" onClick={this.handleAddUser}>
              Save
            </Button>
          </Container>
        )}
      </div>
    );
  }
}

export default App;
