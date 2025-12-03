import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./components/home/Home";
import { toast } from "react-toastify";

const Header = lazy(() => import("header/Header"));
const Login = lazy(() => import("auth/Login"));
const Register = lazy(() => import("auth/Register"));
const UserProfileCard = lazy(() => import("user-profile/UserProfileCard"));

function App() {
  const loginSuccessNotify = () => toast("Logged In Successfully !");

  const logoutSuccessNotify = () => toast("Logged Out Successfully !");

  const registerSuccessNotify = () => toast("Registration Successful !");

  const handleAuthChanged = (user) => {
    console.log("in auth changed function ", user);
    if (user === null) {
      console.log("User logged out of application");
      logoutSuccessNotify();
    } else if (user?.isNewRegistration) {
      console.log("New user registered in application");
      registerSuccessNotify();
    } else if (user?.isLoggedIn) {
      console.log("Existing user logged in application");
      loginSuccessNotify();
    }
  };

  useEffect(() => {
    if (!window.EVENT_BUS) {
      console.warn("EVENT_BUS not ready yet");
      return;
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

  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading Header mfe component...</div>}>
          <Header />
        </Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Suspense
                fallback={<div>Loading Login Form mfe component...</div>}
              >
                <div className={styles.containerLoginWrapper}>
                  <Login />
                </div>
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense
                fallback={<div>Loading Register Form mfe component...</div>}
              >
                <div className={styles.containerRegisterWrapper}>
                  <Register />
                </div>
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense
                fallback={<div>Loading UserProfileCard mfe component...</div>}
              >
                <div className={styles.containerLoginWrapper}>
                  <UserProfileCard />
                </div>
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
