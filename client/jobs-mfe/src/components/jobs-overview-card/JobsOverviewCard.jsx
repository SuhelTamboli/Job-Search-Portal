import React from "react";
import styles from "./JobsOverviewCard.module.css";

const JobsOverviewCard = ({ job }) => {
  return (
    <div className={styles.jobsOverviewCardContainer}>
      <h3>{job.company}</h3>
      <p>{job.country}</p>
      <h4>{job.role}</h4>
      <p>{job.description}</p>
      <div className={styles.jobsOverviewCardPositionWrapper}>
        <span className={styles.jobsOverviewCardSpan}>
          {job.positions} positions
        </span>
        <span className={styles.jobsOverviewCardSpan}>{job.type}</span>
        <span className={styles.jobsOverviewCardSpan}>{job.salary}</span>
      </div>
    </div>
  );
};

export default JobsOverviewCard;
