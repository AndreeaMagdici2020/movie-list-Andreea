import React from "react";
import styles from "./PagesStyling.module.css";
import Button from "@material-ui/core/Button";

class Pages extends React.Component {
  render() {
    const {
      postsPerPage,
      totalPosts,
      paginate,
      nextPage,
      previousPage,
    } = this.props;
    const pageNumbers = [];
    console.log("totalposts", totalPosts);
    console.log("postPerPage", postsPerPage);

    for (var i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
      console.log("pageNumbers", pageNumbers);
    }

    return (
      <nav className={styles.nav}>
        <ul style={{ listStyle: "none" }}>
          <li style={{ float: "left", margin: "3px" }}>
            <p
              onClick={() => {
                previousPage();
              }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ flexShrink: "2" }}
              >
                Prev
              </Button>
            </p>
          </li>

          {pageNumbers.map((num) => (
            <li
              key={Math.random() * 10000}
              style={{ float: "left", margin: "3px", flexShrink: "2" }}
            >
              <p
                onClick={() => {
                  paginate(num);
                }}
              >
                <Button variant="contained" color="primary">
                  {num}
                </Button>
              </p>
            </li>
          ))}

          <li style={{ margin: "3px", float: "left", flexShrink: "2" }}>
            <p
              onClick={() => {
                nextPage();
              }}
            >
              <Button variant="contained" color="primary">
                Next
              </Button>
            </p>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pages;
