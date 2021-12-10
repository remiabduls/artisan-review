import React from "react";
import SearchNavItem from "./SearchNavItem/SearchNavItem";
import styles from "./SearchNav.module.css";

function SearchNav() {
  return (
    <div className={styles.container}>
      <div className={styles["sub-nav"]}>
        <div>
          <SearchNavItem label="Saloon" icon="fa-home" />
          <SearchNavItem label="Automobile servvice" icon="fa-car" />
          <SearchNavItem label="Electrical service" icon="fa-bolt" />
          <SearchNavItem label="More" icon="fa-info-circle" showrightborder />
        </div>
        <div>
          <button
            className={`button ${styles["subnav-button"]} ${styles["omit-right-border"]}`}
          >
            <span className="icon">
              <i className="fas fa-pen"></i>
            </span>
            <span>Write a Review</span>
          </button>
          <button className={`button ${styles["subnav-button"]}`}>
            {" "}
            <span className="icon">
              <i className="fas fa-hotel"></i>{" "}
            </span>
            <span>for Businesses</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchNav;
