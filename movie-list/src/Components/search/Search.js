import React, { Component } from "react";
import axios from "axios";
import { TextField, Button, Container } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import ResultsList from "./ResultsList";
import MoviesResultsList from "./MovieResultsList/MovieResultsList";

import Settings from "../../config/Settings";

import styles from "./Search.module.css";
import Pages from "./Pages";
import popcorn2 from "./popcorn2.png";

class Search extends Component {
  state = {
    searchResults: [],
    searchTerm: "",
    currentPage: 1,
    postsPerPage: 5,
  };

  handleSearch = () => {
    console.log(this.state.searchTerm);
    const { API_URL, API_KEY } = Settings;
    //https://api.themoviedb.org/3/search/movie?api_key=0a230986d7a69ed8de47758928c71e01&query=Terminator
    // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=Terminator
    const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchTerm}`;

    axios
      .get(url)
      .then((response) => {
        this.setState({
          searchResults: response.data.results,
        });
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  handleAdd = (movie) => {
    // this.setState({
    //   searchResults: [],
    //   searchTerm: "",
    // });
    this.props.onMovieAdd(movie);
    alert("the movie was added");
  };
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSearch();
    }
  };

  render() {
    const { currentPage, postsPerPage } = this.state;
    const paginate = (pageNum) => this.setState({ currentPage: pageNum });
    const nextPage = () => this.setState({ currentPage: currentPage + 1 });
    const previousPage = () => this.setState({ currentPage: currentPage - 1 });
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = this.state.searchResults.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    console.log("currentpost:", currentPosts);
    console.log("pagini", this.state.searchResults.length);
    return (
      <div className={styles.searchZone}>
        <div className={styles.containerTextField}>
          <TextField
            placeholder="Type the name of a movie..."
            label="Search"
            variant="outlined"
            className={styles.search}
            value={this.state.searchTerm}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <Button
            className={styles.searchBtn}
            variant="outlined"
            color="primary"
            startIcon={<SearchIcon />}
            onClick={this.handleSearch}
          >
            Search
          </Button>
        </div>

        {this.state.searchResults.length > 0 && (
          <Container className={styles.results}>
            {/* <ResultsList
              //movies={this.state.searchResults}
              movies={currentPosts}
              onAdd={this.handleAdd}
              posts={currentPosts}
            /> */}
            <MoviesResultsList
              movies={currentPosts}
              onAdd={this.handleAdd}
              posts={currentPosts}
            />

            <Pages
              postsPerPage={postsPerPage}
              totalPosts={this.state.searchResults.length}
              paginate={paginate}
              nextPage={nextPage}
              previousPage={previousPage}
            />
          </Container>
        )}
      </div>
    );
  }
}

export default Search;
