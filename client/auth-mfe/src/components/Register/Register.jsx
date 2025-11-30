import React, { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import Button from "shared-ui/Button";

const EVENT_BUS = window.EVENT_BUS;

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    role: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    EVENT_BUS?.emit?.("register-success", {
      user: { name: formData.fName + formData.lName },
    });
    navigate("/");
  };

  return (
    <div className={styles.authRegisterContainer}>
      <h2>Register</h2>
      <form className={styles.authRegisterForm}>
        <label className={styles.authRegisterLabel} htmlFor="fName">
          First Name <span className={styles.authRegisterInputRequired}>*</span>
        </label>
        <input
          className={styles.authRegisterInput}
          name="fName"
          type="text"
          id="fName"
          value={formData.fName}
          onChange={handleFormData}
        />
        <label className={styles.authRegisterLabel} htmlFor="lName">
          Last Name <span className={styles.authRegisterInputRequired}>*</span>
        </label>
        <input
          className={styles.authRegisterInput}
          name="lName"
          type="text"
          id="lName"
          value={formData.lName}
          onChange={handleFormData}
        />
        <label className={styles.authRegisterLabel} htmlFor="email">
          Email <span className={styles.authRegisterInputRequired}>*</span>
        </label>
        <input
          className={styles.authRegisterInput}
          name="email"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleFormData}
        />
        <label className={styles.authRegisterLabel} htmlFor="password">
          Password <span className={styles.authRegisterInputRequired}>*</span>
        </label>
        <input
          name="password"
          className={styles.authRegisterInput}
          type="password"
          id="password"
          value={formData.password}
          onChange={handleFormData}
        />
        {/* <label className={styles.authRegisterLabel} htmlFor="password">
          Confirm Password{" "}
          <span className={styles.authRegisterInputRequired}>*</span>
        </label>
        <input
          className={styles.authRegisterInput}
          type="password"
          id="confirm-password"
        /> */}
        <label className={styles.authRegisterLabel} htmlFor="password">
          Role
          <span className={styles.authRegisterInputRequired}>*</span>
        </label>
        <select
          name="role"
          required
          value={formData.role}
          onChange={handleFormData}
          className={styles.authRegisterRoleInput}
        >
          <option value={""} disabled selected hidden>
            Select Role
          </option>
          <option value={"RECRUITER"}>Recruiter</option>
          <option value={"JOBSEEKER"}>Job Seeker</option>
        </select>
        <div className={styles.authRegisterButtonWrapper}>
          <Button handleClick={handleRegister} name={"Register"} />
        </div>
      </form>
    </div>
  );
};

export default Register;
