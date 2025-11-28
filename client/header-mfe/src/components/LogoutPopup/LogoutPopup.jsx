import React from "react";
import styles from "./LogoutPopup.module.css";
import { IoLogOutOutline } from "react-icons/io5";

const LogoutPopup = () => {
  return (
    <div className={styles.headerLogoutPopup}>
      <span>Logout</span> <IoLogOutOutline size={20} />
    </div>
  );
};

export default LogoutPopup;
