import React from "react";
import styles from "./TopNav.module.css";

function TopNav() {
  return (
    <div className={styles["top-nav"]}>
      <div className={styles["left"]}>
        <span>Write a Review</span>
        <span>Events</span>
      </div>
      <div className={styles["right"]}>
        <span>Login</span>
        <button className={`button is-small ${styles["search-button"]}`}>
          <strong>Sign Up</strong>
        </button>
      </div>
    </div>
  );
}

export default TopNav;
