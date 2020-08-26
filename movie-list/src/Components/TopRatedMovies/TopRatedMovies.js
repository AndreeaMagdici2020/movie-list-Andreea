import React from "react";
import axios from "axios";
import styles from "./TopRatedMoviesStyling.module.css";
import Settings from "../../config/Settings";
import PopularMovieItem from "./PopularMovieList/PopularMovieItem";
import popcorn2 from "./../search/popcorn2.png";
import Grid from "@material-ui/core/Grid";

class TopRatedMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topTenRated: [] };
  }
  sortMoviesbyPopularity = (list) => {
    for (let i = list.length - 1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
        if (list[j].popularity > list[j - 1].popularity) {
          let aux = list[j];
          list[j] = list[j - 1];
          list[j - 1] = aux;
        }
      }
    }
  };
  getTopRatedMovies = () => {
    const { API_URL, API_KEY } = Settings;
    const url = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    let topList = [];
    axios
      .get(url)
      .then((response) => {
        topList = response.data.results;
        this.sortMoviesbyPopularity(topList);
        console.log("topList:", topList);
        topList.splice(5, 15);
        this.setState({
          topTenRated: topList,
        });
        console.log("state topTenRated", this.state.topTenRated);
        localStorage.setItem(
          "topPopularMovies",
          JSON.stringify({
            topPopularMovies: this.state.topTenRated,
          })
        );
      })
      .catch((error) => console.log(console.log(error)));
  };

  componentDidMount() {
    this.getTopRatedMovies();
  }

  render() {
    return (
      <Grid container className={styles.topratedmoviesdiv}>
        <h2>Top Popular Movies</h2>
        <Grid
          item
          xs={12}
          className={styles.popMovImg}
          style={{ margin: "auto", padding: "10%" }}
        >
          <img
            src={popcorn2}
            alt="popcorn"
            className={styles.img}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={12} className={styles.list}>
          <ol>
            {this.state.topTenRated.map((item) => {
              return <PopularMovieItem key={item.id} item={item} />;
            })}
          </ol>
        </Grid>
      </Grid>
    );
  }
}

export default TopRatedMovies;
