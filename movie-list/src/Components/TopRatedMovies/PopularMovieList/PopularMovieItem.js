import React from "react";
const PopularMovieItem = (props) => {
  return (
    <li style={{ marginLeft: "0px" }}>
      {props.item.original_title} - Popularity: {props.item.popularity}
      <hr></hr>
    </li>
  );
};
export default PopularMovieItem;
