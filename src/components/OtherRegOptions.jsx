/** @format */

import Button from "./Button";
import FloatingWindow from "./FloatingWindow";
import styles from "../styles/OtherRegOptions.module.css";
import icon_facebook from "../assets/icons/facebook.svg";
import icon_google from "../assets/icons/google.svg";
import icon_github from "../assets/icons/github.svg";
import icon_telegram from "../assets/icons/telegram.svg";
import { Link } from "react-router-dom";

export default function OtherRegOptions() {
  return (
    <FloatingWindow className={styles.window}>
      <h3>
        <span>Possible sign up methods</span>
      </h3>
      <p>
        Use one of your accounts to create <span>an account here</span>
      </p>
      <Button type="normal" className={styles.github}>
        <img src={icon_github} /> Github
      </Button>
      <Button type="normal" className={styles.google}>
        <img src={icon_google} /> Google
      </Button>
      <Button type="normal" className={styles.facebook}>
        <img src={icon_facebook} /> Facebook
      </Button>
      <Button type="normal" className={styles.telegram}>
        <img src={icon_telegram} /> Telegram
      </Button>
      <Link to={-1}>&larr; Go Back</Link>
    </FloatingWindow>
  );
}
