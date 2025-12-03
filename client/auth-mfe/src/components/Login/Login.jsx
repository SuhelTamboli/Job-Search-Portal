import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, Link } from "react-router-dom";
import Button from "shared-ui/Button";
import styles from "./Login.module.css";

const EVENT_BUS = window.EVENT_BUS;

// Zod schema for login
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  role: z.enum(["RECRUITER", "JOBSEEKER"], {
    required_error: "Please select your role",
  }),
});

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // ← Add this

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      EVENT_BUS?.emit?.("auth-changed", {
        user: {
          email: data.email,
          role: data.role,
          isLoggedIn: true,
          isNewRegistration: false,
        },
      });

      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className={styles.authLoginContainer}>
      <h2>Log In</h2>

      <form
        className={styles.authLoginForm}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {/* Email */}
        <label className={styles.authLoginLabel} htmlFor="email">
          Email <span className={styles.authLoginInputRequired}>*</span>
        </label>
        <input
          {...register("email")}
          className={`${styles.authLoginInput} ${
            errors.email ? styles.inputError : ""
          }`}
          id="email"
          type="email"
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className={styles.errorText}>{errors.email.message}</p>
        )}

        {/* Password */}
        <label className={styles.authLoginLabel} htmlFor="password">
          Password <span className={styles.authLoginInputRequired}>*</span>
        </label>
        <div className={styles.passwordWrapper}>
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            className={`${styles.authLoginInput} ${
              errors.password ? styles.inputError : ""
            }`}
            id="password"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className={styles.togglePassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && (
          <p className={styles.errorText}>{errors.password.message}</p>
        )}

        {/* Role */}
        <label className={styles.authLoginLabel} htmlFor="role">
          Role <span className={styles.authLoginInputRequired}>*</span>
        </label>
        <select
          {...register("role")}
          className={`${styles.authLoginRoleInput} ${
            errors.role ? styles.inputError : ""
          }`}
          id="role"
        >
          <option value="" disabled selected hidden>
            Select Role
          </option>
          <option value="RECRUITER">Recruiter</option>
          <option value="JOBSEEKER">Job Seeker</option>
        </select>
        {errors.role && (
          <p className={styles.errorText}>{errors.role.message}</p>
        )}

        {/* Submit Button */}
        <div className={styles.authLoginButtonWrapper}>
          <Button
            type="submit"
            name={isSubmitting ? "Logging in..." : "Login"}
            disabled={isSubmitting}
          />
        </div>
      </form>

      <p className={styles.registerLink}>
        Don't have an account?{" "}
        <Link to="/register" className={styles.link}>
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;
