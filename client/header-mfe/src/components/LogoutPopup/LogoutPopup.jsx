import React from "react";
import styles from "./LogoutPopup.module.css";
import { IoLogOutOutline } from "react-icons/io5";

const LogoutPopup = ({ logoutUser }) => {
  return (
    <div className={styles.headerLogoutPopup} onClick={logoutUser}>
      <span>Logout</span> <IoLogOutOutline size={20} />
    </div>
  );
};

export default LogoutPopup;
