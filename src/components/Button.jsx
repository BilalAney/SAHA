/** @format */
import styles from "../styles/Button.module.css";

//Three types available, "ok" type, "ignore" type, and "normal" type.

export default function Button({ onClick, children, type, className }) {
  return (
    <button className={`${styles[type]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
