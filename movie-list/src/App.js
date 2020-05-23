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
  };

  componentDidMount() {
    const saved = localStorage.getItem("userData");
    const userDetails = localStorage.getItem("userDetails");
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
  changeRating = (rating) => {
    console.log(rating);
  };
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
