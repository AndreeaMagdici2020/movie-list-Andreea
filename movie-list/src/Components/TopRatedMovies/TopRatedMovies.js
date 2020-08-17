import React from "react";
import axios from "axios";
import styles from "./TopRatedMoviesStyling.module.css";
import Settings from "../../config/Settings";
import PopularMovieItem from "./PopularMovieList/PopularMovieItem";

class TopRatedMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topTenRated: [] };
  }
  getTopRatedMovies = () => {
    const { API_URL, API_KEY } = Settings;
    const url = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    //https://api.themoviedb.org/3/discover/movie?api_key=0a230986d7a69ed8de47758928c71e01&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
    axios
      .get(url)
      .then((response) => {
        this.setState({ topTenRated: response.data.results });
        console.log("state", this.state.topTenRated);
        localStorage.setItem(
          "topPopularMovies",
          JSON.stringify({ topPopularMovies: this.state.topTenRated })
        );
      })
      .catch((error) => console.log(console.log(error)));
  };
  componentDidMount() {
    this.getTopRatedMovies();
  }
  getFirstTenMovies(x) {
    for (let i = 0; i < 10; i++) {
      return x[i];
    }
  }
  render() {
    return (
      <div className={styles.topratedmoviesdiv}>
        <h2>Top Popular Movies</h2>
        <ol>
          {/* {this.state.topTenRated.map((item) => {
            return <PopularMovieItem item={item} />;
          })} */}
          {this.state.topTenRated.splice(0, 10).map((item) => {
            return <PopularMovieItem item={item} />;
          })}
        </ol>
      </div>
    );
  }
}

export default TopRatedMovies;
