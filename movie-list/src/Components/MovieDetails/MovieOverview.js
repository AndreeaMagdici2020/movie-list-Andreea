import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "./MovieOverviewStyling.module.css";
const MovieOverview = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Tooltip title="see movie overview" className={styles.tooltip}>
        <button
          className={styles.detailsBtn}
          onClick={() => {
            setShow(!show);
          }}
          title="See movie details"
        >
          Movie
          <br />
          details
        </button>
      </Tooltip>
      {show === true ? <div>{props.item.overview}</div> : ""}
    </div>
  );
};
export default MovieOverview;
