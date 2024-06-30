/** @format */

import { useState } from "react";
import styles from "../styles/RegisterationForm.module.css";
import Button from "./Button";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function RegisterationForm() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    dob: new Date().toUTCString(),
    gender: "male",
    level: "beginner",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setFormData((pre) => ({ ...pre, [name]: value }));
  }

  const navigate = useNavigate();

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <Link to={-1}>&larr; I have an account</Link>
      <div className={styles.nameCtn}>
        <label>
          First name:
          <input
            type="text"
            name="fName"
            placeholder="first name"
            value={formData.fName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last name:
          <input
            type="text"
            name="lName"
            placeholder="last name"
            value={formData.lName}
            onChange={handleChange}
          />
        </label>
      </div>
      <fieldset>
        <legend>Gender</legend>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
      </fieldset>
      <label>
        Date of birth:
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </label>
      <label>
        Your programming level:
        <select name="level" value={formData.level} onChange={handleChange}>
          <option value="baby">🐣 baby</option>
          <option value="beginner">🔰 beginner</option>
          <option value="medium">👍 medium </option>
          <option value="good">🟢 good </option>
          <option value="advanced">🅰️ advanced </option>
          <option value="professional">🔮 professional </option>
          <option value="violent">💪 violent </option>
          <option value="unbeatable">🐦‍🔥 unbeatable </option>
        </select>
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <label>
        Confirm password:
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repeat password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </label>
      <div className={styles.btnContainer}>
        <Button type="ok">Create Account</Button>
        <Button type="normal" onClick={() => navigate("options")}>
          Other Options
        </Button>
      </div>
    </form>
  );
}
