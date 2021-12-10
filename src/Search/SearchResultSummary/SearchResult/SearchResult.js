import React from "react";
import BusinessRating from "../../../BusinessRating/BusinessRating";
import styles from "./SearchResult.module.css";

function SearchResult() {
  return (
    <div className={styles["search-result"]}>
      <img
        src="./images/electr.png"
        alt="business"
        className={styles["business-image"]}
      />
      <div className={styles["business-info"]}>
        <h2 className="subtitle">Ramson Electric</h2>
        <BusinessRating/>
        <p>
          $$ <span className="tag">electrician</span>{" "}
          <span className="tag">services</span>
        </p>
      </div>
      <div className={styles["contact-info"]}>
      <p>+234900009293</p>
      <p>Noah ark street 6</p>
      <p>100232</p>
      <p>Lagos</p>

      </div>

     
    </div>
  );
}

export default SearchResult;
