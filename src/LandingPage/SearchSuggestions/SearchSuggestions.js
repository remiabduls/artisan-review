import React from "react";
import styles from "./SearchSuggestions.module.css";

function SearchSuggestions() {
  return (
    <div className={styles.suggestions}>
      <span className="icon is-small">
        <i className="fas fa-concierge-bell"></i>
      </span>
      <span className={styles.suggestion}>Saloon</span>
      <span className="icon is-small">
        <i className="fas fa-car"></i>
      </span>
      <span className={styles.suggestion}>Automobile</span>
      <span className="icon is-small">
        <i className="fas fa-utensils"></i>
      </span>
      <span className={styles.suggestion}>Furnishing</span>
      <span className="icon is-small">
        <i className="fas fa-bolt"></i>
      </span>
      <span className={styles.suggestion}>Electrical Services</span>
    </div>
  );
}

export default SearchSuggestions;
