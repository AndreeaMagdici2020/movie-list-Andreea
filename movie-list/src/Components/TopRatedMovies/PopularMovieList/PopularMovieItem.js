import React from "react";
import styles from "./PopularMovieItemStyling.module.css";
const PopularMovieItem = (props) => {
  return (
    <li className={styles.popularMovieItem}>
      {props.item.original_title} - Popularity: {props.item.popularity}
      {/* <hr></hr> */}
    </li>
  );
};
export default PopularMovieItem;
