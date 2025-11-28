import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

const Header = lazy(() => import("header/Header"));
const Login = lazy(() => import("auth/Login"));
const Register = lazy(() => import("auth/Register"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading Header mfe component...</div>}>
          <Header />
        </Suspense>
        <Routes>
          <Route path="/" element={<div>Welcome to Job Portal</div>} />
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
