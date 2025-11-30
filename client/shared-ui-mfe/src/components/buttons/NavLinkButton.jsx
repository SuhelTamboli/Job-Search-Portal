import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavLinkButton.module.css";

const NavLinkButton = ({ name, to }) => {
  return (
    <Link className={styles.sharedNavLinkButton} to={to}>
      {name}
    </Link>
  );
};

export default NavLinkButton;
