import React from "react";
import Header from "./shared/header/Header";
import { Grid, Container } from "@material-ui/core";
import MovieList from "./Components/movielist/MovieList";
import Search from "./Components/search/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="md">
        <Search />
      </Container>
      <Container maxWidth="sm"></Container>
    </div>
  );
}

export default App;
