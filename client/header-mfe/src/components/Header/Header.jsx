import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import LogoutPopup from "../LogoutPopup/LogoutPopup";

// Use window directly
const EVENT_BUS = window.EVENT_BUS;

const Header = () => {
  const [toggleAvatar, setToggleAvatar] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const loginUser = (event) => {
    console.log("caught login-success event in header ", event);
    setIsSignedIn(true);
  };

  const logoutUser = () => {
    setIsSignedIn(false);
    handleToggle();
    EVENT_BUS?.emit?.("logout-success", { user: null });
  };

  useEffect(() => {
    if (!EVENT_BUS) {
      console.warn("EVENT_BUS not ready yet");
      // Optional: retry logic
    }
    const unsubscribe = EVENT_BUS?.on?.("login-success", loginUser);

    return unsubscribe;
  }, []);

  const handleToggle = () => setToggleAvatar((prev) => !prev);

  const renderSignedInSection = () => {
    return (
      <div className={styles.headerLinksContainer}>
        <Link className={styles.headerLink} to={"/"}>
          Home
        </Link>
        <Link className={styles.headerLink} to={"/jobs"}>
          Jobs
        </Link>
        <Link className={styles.headerLink} to={"/browse"}>
          Browse
        </Link>
        <div className={styles.headerAvatarWrapper}>
          <Avatar handleToggle={handleToggle} />
          {toggleAvatar && (
            <div className={styles.headerLogoutPopupWrapper}>
              <LogoutPopup logoutUser={logoutUser} />
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderSignedOutSection = () => {
    return (
      <div className={styles.headerLinksContainer}>
        <Link className={styles.headerLoginLink} to={"/login"}>
          Login
        </Link>
        <Link className={styles.headerLoginLink} to={"/register"}>
          Register
        </Link>
      </div>
    );
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTitle}>Job Portal</div>
      {isSignedIn ? renderSignedInSection() : renderSignedOutSection()}
    </div>
  );
};

export default Header;
