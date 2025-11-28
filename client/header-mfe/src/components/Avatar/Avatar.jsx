import React from "react";
import styles from "./Avatar.module.css";

const Avatar = ({ handleToggle }) => {
  return (
    <div className={styles.headerAvatar} onClick={handleToggle}>
      ST
    </div>
  );
};

export default Avatar;
