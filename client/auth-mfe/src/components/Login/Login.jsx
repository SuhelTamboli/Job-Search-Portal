import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.authLoginContainer}>
      <h2>LogIn</h2>
      <form className={styles.authLoginForm} onSubmit={handleLogin}>
        <label className={styles.authLoginLabel} htmlFor="email">
          Email <span className={styles.authLoginInputRequired}>*</span>
        </label>
        <input
          className={styles.authLoginInput}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleFormData}
        />
        <label className={styles.authLoginLabel} htmlFor="password">
          Password <span className={styles.authLoginInputRequired}>*</span>
        </label>
        <input
          className={styles.authLoginInput}
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleFormData}
        />
        <button className={styles.authLoginButton}>Login</button>
      </form>
    </div>
  );
};

export default Login;
