import React from "react";
import styles from "./LogoutPopup.module.css";
import { IoLogOutOutline } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";

const LogoutPopup = ({ logoutUser, viewProfile }) => {
  return (
    <div className={styles.headerLogoutPopup}>
      <div className={styles.headerLogoutPopupOptions} onClick={viewProfile}>
        <MdOutlinePerson size={20} />
        <span>View Profile</span>
      </div>
      <div className={styles.headerLogoutPopupOptions} onClick={logoutUser}>
        <IoLogOutOutline size={20} />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default LogoutPopup;
