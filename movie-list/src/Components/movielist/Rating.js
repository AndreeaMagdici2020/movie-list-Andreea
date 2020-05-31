import React from "react";
import styles from "./Rating.module.css";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import { Icon } from "@material-ui/core";
class Rating extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { rating: props.userRating || 0 };
    this.state = { rating: props.userRating };
  }

  render() {
    const ratings = [...Array(5)].map((item, index) => index + 1);
    const { changeRating, userRating, savedRating, movie } = this.props;
    const { rating } = this.state;
    const movieId = movie.id;

    return (
      <div className={styles.divstart}>
        {ratings.map((item) => (
          <Icon
            onClick={() => {
              //this.props.changeRating(this.props.movie.original_title, item);
              this.props.changeRating(item, movieId);
              //console.log("din props:", this.props.movie.original_title);
              console.log("item:", item);
              this.setState({ rating: item });
              console.log("rating:", rating);
              //console.log("userrating:", this.state.rating);
            }}
          >
            {rating >= item ? (
              <Star className={styles.star} />
            ) : (
              <StarBorder className={styles.star} />
            )}
          </Icon>
        ))}
      </div>
    );
  }
}

export default Rating;
