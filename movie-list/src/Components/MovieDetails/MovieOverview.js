import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "./MovieOverviewStyling.module.css";
const MovieOverview = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Tooltip
        className={styles.tooltip}
        title={
          <p
            style={{
              fontSize: "18px",

              color: "white",
            }}
          >
            See the movie overview
          </p>
        }
        placement="right"
        className={styles.tooltip}
      >
        <button
          className={styles.detailsBtn}
          onClick={() => {
            setShow(!show);
          }}
        >
          Movie
          <br />
          overview
        </button>
      </Tooltip>
      {show === true ? (
        <div className={styles.overview}>
          <em>Overview:</em>
          <br />
          {props.item.overview}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default MovieOverview;
