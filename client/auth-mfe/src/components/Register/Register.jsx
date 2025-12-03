import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import Button from "shared-ui/Button";
import styles from "./Register.module.css";

const EVENT_BUS = window.EVENT_BUS;

// Password requirements checklist
const passwordRequirements = [
  { text: "At least 8 characters", test: (val) => val.length >= 8 },
  { text: "One uppercase letter (A-Z)", test: (val) => /[A-Z]/.test(val) },
  { text: "One lowercase letter (a-z)", test: (val) => /[a-z]/.test(val) },
  { text: "One number (0-9)", test: (val) => /[0-9]/.test(val) },
  {
    text: "One special character (!@#$%^&*)",
    test: (val) => /[^A-Za-z0-9]/.test(val),
  },
];

// Zod schema with single password error message
const registerSchema = z.object({
  fName: z.string().min(2, "First name must be at least 2 characters"),
  lName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[\d\s\-\+\(\)]+$/, "Only numbers, spaces, +, -, () allowed"),
  password: z
    .string()
    .refine((val) => passwordRequirements.every((req) => req.test(val)), {
      message: "Password must meet all the requirements below:",
    }),
  role: z.enum(["RECRUITER", "JOBSEEKER"], {
    required_error: "Please select a role",
  }),
});

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange", // Real-time validation (recommended for UX)
  });

  const watchedPassword = watch("password", "");

  const onSubmit = async (data) => {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800));

       EVENT_BUS?.emit?.("auth-changed", {
         user: {
           email: data.email,
           role: data.role,
           isLoggedIn: true,
           isNewRegistration: true,
         },
       });

      navigate("/");
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className={styles.authRegisterContainer}>
      <h2>Register</h2>

      <form
        className={styles.authRegisterForm}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {/* First Name */}
        <label className={styles.authRegisterLabel} htmlFor="fName">
          First Name <span className={styles.authRegisterInputRequired}>*</span>
        </label>
        <input
          {...register("fName")}
          className={`${styles.authRegisterInput} ${
            errors.fName ? styles.inputError : ""
          }`}
          id="fName"
          type="text"
          placeholder="John"
        />
        {errors.fName && (
          <p className={styles.errorText}>{errors.fName.message}</p>
        )}

        {/* Last Name */}
        <label className={styles.authRegisterLabel} htmlFor="lName">
          Last Name <span className={styles.authRegisterInputRequired}>*</span>
        </label>
        <input
          {...register("lName")}
          className={`${styles.authRegisterInput} ${
            errors.lName ? styles.inputError : ""
          }`}
          id="lName"
          type="text"
          placeholder="Doe"
        />
        {errors.lName && (
          <p className={styles.errorText}>{errors.lName.message}</p>
        )}

        {/* Email */}
        <label className={styles.authRegisterLabel} htmlFor="email">
          Email <span className={styles.authRegisterInputRequired}>*</span>
        </label>
        <input
          {...register("email")}
          className={`${styles.authRegisterInput} ${
            errors.email ? styles.inputError : ""
          }`}
          id="email"
          type="email"
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className={styles.errorText}>{errors.email.message}</p>
        )}

        {/* Phone */}
        <label className={styles.authRegisterLabel} htmlFor="phone">
          Phone <span className={styles.authRegisterInputRequired}>*</span>
        </label>
        <input
          {...register("phone")}
          className={`${styles.authRegisterInput} ${
            errors.phone ? styles.inputError : ""
          }`}
          id="phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
        />
        {errors.phone && (
          <p className={styles.errorText}>{errors.phone.message}</p>
        )}

        {/* Password */}
        <label className={styles.authRegisterLabel} htmlFor="password">
          Password <span className={styles.authRegisterInputRequired}>*</span>
        </label>
        <input
          {...register("password")}
          className={`${styles.authRegisterInput} ${
            errors.password ? styles.inputError : ""
          }`}
          id="password"
          type="password"
          placeholder="Enter a strong password"
        />

        {/* Single Password Requirements Box */}
        {errors.password ? (
          <div className={styles.passwordRequirements}>
            <p className={styles.errorTitle}>{errors.password.message}</p>
            <ul className={styles.requirementsList}>
              {passwordRequirements.map((req, idx) => {
                const satisfied = req.test(watchedPassword);
                return (
                  <li
                    key={idx}
                    className={satisfied ? styles.valid : styles.invalid}
                  >
                    {satisfied ? "✓" : "✗"} {req.text}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : watchedPassword.length > 0 ? (
          // Optional: Show green checklist even when valid (great UX!)
          <div className={styles.passwordRequirementsSuccess}>
            <ul className={styles.requirementsList}>
              {passwordRequirements.map((req, idx) => {
                const satisfied = req.test(watchedPassword);
                return (
                  <li
                    key={idx}
                    className={satisfied ? styles.valid : styles.invalid}
                  >
                    {satisfied ? "✓" : "○"} {req.text}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        {/* Role */}
        <label className={styles.authRegisterLabel} htmlFor="role">
          Role <span className={styles.authRegisterInputRequired}>*</span>
        </label>
        <select
          {...register("role")}
          className={`${styles.authRegisterRoleInput} ${
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

        {/* Submit */}
        <div className={styles.authRegisterButtonWrapper}>
          <Button
            type="submit"
            name={isSubmitting ? "Creating Account..." : "Register"}
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
