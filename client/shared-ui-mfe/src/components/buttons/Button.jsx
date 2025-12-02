import React from "react";
import styles from "./Button.module.css";

/**
 * Shared Button Component
 * Used across Login, Register, and the entire app
 */
const Button = ({
  type = "button",
  name,
  disabled = false,
  isLoading = false, // For showing spinner + "Loading..."
  handleClick, // Optional: only needed for non-submit buttons
  ...props // Allows className, id, etc.
}) => {
  return (
    <button
      type={type}
      className={`${styles.sharedButton} ${
        disabled || isLoading ? styles.disabled : ""
      } ${isLoading ? styles.loading : ""}`}
      onClick={handleClick}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className={styles.spinner}></span>
          Loading...
        </>
      ) : (
        name
      )}
    </button>
  );
};

export default Button;
