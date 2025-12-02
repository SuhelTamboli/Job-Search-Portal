import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import Button from "shared-ui/Button";
import { Link } from "react-router-dom";

const EVENT_BUS = window.EVENT_BUS;

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: ""
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    EVENT_BUS?.emit?.("login-success", { user: { name: formData.email } });
    navigate("/");
  };

  return (
    <div className={styles.authLoginContainer}>
      <h2>LogIn</h2>
      <form className={styles.authLoginForm}>
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
        <label className={styles.authLoginLabel} htmlFor="password">
          Role
          <span className={styles.authLoginInputRequired}>*</span>
        </label>
        <select
          name="role"
          required
          value={formData.role}
          onChange={handleFormData}
          className={styles.authLoginRoleInput}
        >
          <option value={""} disabled selected hidden>
            Select Role
          </option>
          <option value={"RECRUITER"}>Recruiter</option>
          <option value={"JOBSEEKER"}>Job Seeker</option>
        </select>
        <div className={styles.authLoginButtonWrapper}>
          <Button handleClick={handleLogin} name={"Login"} />
        </div>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
