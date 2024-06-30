/** @format */

import { useNavigate } from "react-router";
import styles from "../styles/FloatingWindow.module.css";

export default function FloatingWindow({ children, className }) {
  return (
    <>
      <Overlay />
      <div className={`${styles.window} ${className}`}>{children}</div>
    </>
  );
}

function Overlay() {
  const navigate = useNavigate();
  return <div className={styles.overlay} onClick={() => navigate(-1)}></div>;
}
