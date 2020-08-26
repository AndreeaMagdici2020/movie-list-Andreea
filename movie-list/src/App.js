import React from "react";
import Header from "./shared/header/Header";
import { Grid, Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TextField, Button, Typography } from "@material-ui/core";
import MovieList from "./Components/movielist/MovieList";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import MovieDescription from "./Components/MovieDetails/MovieDescription";
import Search from "./Components/search/Search";
import styles from "./AppStyling.module.css";
import TopRatedMovies from "./Components/TopRatedMovies/TopRatedMovies";

const keygenerator = () => {
  Math.ceil(Math.random() * 10000);
};
class App extends React.Component {
  state = {
    savedMovies: [],
    savedRating: [],
    user: null,
  };

  componentDidMount() {
    const savedMovies = localStorage.getItem("userData");
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
    if (savedMovies) {
      const parsed = JSON.parse(savedMovies);
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
    console.log("the movie was added");
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
      <Router>
        <Grid container spacing={1} className={styles.App}>
          <Grid item xs={12} className={styles.header}>
            <Header user={user} onLogout={this.logout} />
          </Grid>

          {user ? (
            <Switch>
              <Route path="/" exact>
                <Grid container spacing={1} className={styles.mainPage}>
                  <Grid item xs={12} sm={4} className={styles.topRatedDiv}>
                    <TopRatedMovies />
                  </Grid>
                  <Grid item xs={12} sm={7} sm className={styles.searchDiv}>
                    <Search
                      className={styles.searchItem}
                      onMovieAdd={this.onMovieAdd}
                    />
                  </Grid>
                </Grid>

                {/* <Container maxWidth="md" style={{ marginLeft: "30%" }}>
                    <MovieList
                      key={keygenerator()}
                      savedMovies={savedMovies}
                      onMovieDelete={this.onMovieDelete}
                      savedRating={this.state.savedRating}
                      changeRating={this.changeRating}
                    />
                  </Container> */}
              </Route>
              <Route path="/Settings">
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      align="center"
                      color="primary"
                      variant="h4"
                      style={{ margin: "0 auto", marginTop: "15%" }}
                    >
                      {" "}
                      Hello {user.userName}
                    </Typography>
                  </Grid>
                </Grid>
              </Route>
              <Route path="/details/:id">
                <Grid container>
                  <Grid item xs={12}>
                    <MovieDescription />
                    {/* <MovieDetails /> !!!*/}
                  </Grid>
                </Grid>
              </Route>
              <Route path="/FavoriteMovies" exact>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        marginTop: "70px",
                        marginBottom: "40px",
                        textAlign: "center",
                        color: "navy",
                      }}
                    >
                      My Favorite Movies 🎞️
                    </Typography>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        marginLeft: "80px",
                      }}
                    >
                      <MovieList
                        key={keygenerator()}
                        savedMovies={savedMovies}
                        onMovieDelete={this.onMovieDelete}
                        savedRating={this.state.savedRating}
                        changeRating={this.changeRating}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Route>
              <Route path="/MovieDescription">
                <Grid container>
                  <Grid item xs={12}>
                    <MovieDescription />
                  </Grid>
                </Grid>
              </Route>
              <Route path="*">
                <Grid container>
                  <Grid item xs={12}>
                    Page not Found
                  </Grid>
                </Grid>
              </Route>
            </Switch>
          ) : (
            <Grid container>
              <Grid item xs={12}>
                <h2>Hello stranger!</h2>
                <h4>What is your name?</h4>
                <TextField label="Name" onChange={this.onUserChange} />
                <Button variant="contained" onClick={this.handleAddUser}>
                  Save
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Router>
    );
  }
}

export default App;
