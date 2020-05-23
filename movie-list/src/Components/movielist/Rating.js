import React from "react";
import styles from "./Rating.module.css";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import { Icon } from "@material-ui/core";
class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: props.userRating || 0 };
  }
  render() {
    const ratings = [...Array(5)].map((item, index) => index + 1);
    const { changeRating, userRating = 3 } = this.props;
    return (
      <div className={styles.divstart}>
        {ratings.map((item) => (
          <Icon onClick={() => this.props.changeRating(item)}>
            {item <= userRating ? (
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
