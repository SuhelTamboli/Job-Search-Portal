import React, { useState } from "react";
import styles from "./Home.module.css";

// Use window directly
const EVENT_BUS = window.EVENT_BUS;

const Home = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className={styles.containerHomeWrapper}>
      <div className={styles.containerHomeTitleWrapper}>
        <h2>Search, Apply & </h2>
        <h2>Get Your Dream Job</h2>
      </div>
      <div className={styles.containerHomeSearchWrapper}>
        <input
          className={styles.containerSearchInput}
          type="text"
          id="search"
          name="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.containerHomeSearchButton}>Search</button>
      </div>
    </div>
  );
};

export default Home;
