/** @format */

import { useId, useState } from "react";
import styles from "../styles/LoginForm.module.css";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const id = useId();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    keeplogged: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((pre) => ({ ...pre, [name]: value }));
  }

  const navigate = useNavigate();

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <label htmlFor={`user-${id}`}>
        Username
        <input
          type="text"
          name="username"
          id={`user-${id}`}
          placeholder="Enter your user name"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label htmlFor={`pass-${id}`}>
        Password
        <input
          type="password"
          name="password"
          id={`pass-${id}`}
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <label htmlFor={`keep-${id}`}>
        <input
          type="checkbox"
          name="keeplogged"
          id={`keep-${id}`}
          value={formData.keeplogged}
          onChange={handleChange}
        />
        Keep me logged in
      </label>
      <div className={styles.btnContainer}>
        <Button
          type="ok"
          className={styles.loginButton}
          onClick={() => navigate("/mainDashboard")}
        >
          Login!
        </Button>
        <Button type="ignore" onClick={() => navigate("/register")}>
          Register
        </Button>
        <Button type="normal">Forget password</Button>
      </div>
    </form>
  );
}
