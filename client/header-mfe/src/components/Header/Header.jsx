import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import LogoutPopup from "../logout-popup/LogoutPopup";
import NavLinkButton from "shared-ui/NavLinkButton";
import { useNavigate } from "react-router-dom";

// Use window directly
const EVENT_BUS = window.EVENT_BUS;

const Header = () => {
  const [toggleAvatar, setToggleAvatar] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => setToggleAvatar((prev) => !prev);

  const viewProfile = () => {
    navigate("/profile");
    handleToggle();
  };


  const handleAuthChanged = (user) => {
    if (user?.isLoggedIn) {
      console.log("User logged in application");
      setIsSignedIn(true);
    }
  };

  const logoutUser = () => {
    setIsSignedIn(false);
    handleToggle();
    EVENT_BUS?.emit?.("auth-changed", {
      user: null
    });
    navigate("/");
  };

  useEffect(() => {
    if (!EVENT_BUS) {
      console.warn("EVENT_BUS not ready yet");
      // Optional: retry logic
    }

    const unsubscribeAuthChanged = window.EVENT_BUS.on(
      "auth-changed",
      ({ user }) => {
        console.log("caught auth-changed event in container App.jsx");
        handleAuthChanged(user);
      }
    );

    // Proper cleanup
    return () => {
      unsubscribeAuthChanged?.();
    };
  }, []);
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
              <LogoutPopup logoutUser={logoutUser} viewProfile={viewProfile} />
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderSignedOutSection = () => {
    return (
      <div className={styles.headerLinksContainer}>
        <NavLinkButton name={"Login"} to={"/login"} />
        <NavLinkButton name={"Register"} to={"/register"} />
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
