import React from "react";
import styles from "./Button.module.css";

const Button = ({ name, handleClick = () => {} }) => {
  return (
    <button className={styles.sharedButton} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
