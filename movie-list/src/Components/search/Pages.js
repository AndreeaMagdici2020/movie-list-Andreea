import React from "react";
import styles from "./Search.module.css";
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
              Prev
            </p>
          </li>
          {pageNumbers.map((num) => (
            <li style={{ float: "left", margin: "3px" }}>
              <p
                onClick={() => {
                  paginate(num);
                }}
              >
                {num}
              </p>
            </li>
          ))}

          <li style={{ margin: "3px", float: "left" }}>
            <p
              onClick={() => {
                nextPage();
              }}
            >
              Next
            </p>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pages;
