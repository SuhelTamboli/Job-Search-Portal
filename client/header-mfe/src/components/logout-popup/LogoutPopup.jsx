import React from "react";
import styles from "./LogoutPopup.module.css";
import { IoLogOutOutline } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";

const LogoutPopup = ({ logoutUser, viewProfile }) => {
  return (
    <div className={styles.headerLogoutPopup}>
      <div className={styles.headerLogoutPopupOptions} onClick={viewProfile}>
        <span>View Profile</span> <MdOutlinePerson size={20} />
      </div>
      <div className={styles.headerLogoutPopupOptions} onClick={logoutUser}>
        <span>Logout</span> <IoLogOutOutline size={20} />
      </div>
    </div>
  );
};

export default LogoutPopup;
