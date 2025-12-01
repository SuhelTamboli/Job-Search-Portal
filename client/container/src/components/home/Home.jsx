import React, { useState } from "react";
import styles from "./Home.module.css";
import JobsOverview from "../jobs-overview/JobsOverview";

// Use window directly
const EVENT_BUS = window.EVENT_BUS;

const Home = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className={styles.containerHomeWrapper}>
      <div className={styles.containerHomeTitleWrapper}>
        <h1>Search, Apply & </h1>
        <h1>Get Your Dream Job</h1>
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
      <JobsOverview />
    </div>
  );
};

export default Home;
