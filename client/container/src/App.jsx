import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./Home/Home";
import { toast } from "react-toastify";

const Header = lazy(() => import("header/Header"));
const Login = lazy(() => import("auth/Login"));
const Register = lazy(() => import("auth/Register"));

function App() {
  const loginSuccessNotify = () => toast("Logged In Successfully !");

  const logoutSuccessNotify = () => toast("Logged Out Successfully !");

  const registerSuccessNotify = () => toast("Registration Successful !");

  useEffect(() => {
    if (!window.EVENT_BUS) {
      console.warn("EVENT_BUS not ready yet");
      return;
    }

    const unsubscribeRegister = window.EVENT_BUS.on("register-success", () => {
      console.log("caught register-success event in container App.jsx");
      registerSuccessNotify();
    });

    const unsubscribeLogin = window.EVENT_BUS.on("login-success", () => {
      console.log("caught login-success event in container App.jsx");
      loginSuccessNotify();
    });

    const unsubscribeLogout = window.EVENT_BUS.on("logout-success", () => {
      console.log("caught logout-success event in container App.jsx");
      logoutSuccessNotify();
    });

    // Proper cleanup
    return () => {
      unsubscribeLogin?.();
      unsubscribeLogout?.();
      unsubscribeRegister?.();
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
