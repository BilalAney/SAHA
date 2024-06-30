/** @format */

import { Outlet } from "react-router";
import Footer from "../components/Footer";
import RegisterationForm from "../components/RegisterationForm";
import styles from "../styles/RegisterationPage.module.css";

export default function Registeration() {
  return (
    <div className={styles.page}>
      <Outlet />
      <h1>
        Unveil your <span>showcase!</span>
      </h1>
      <h3>
        By creating your account, you will have a great opportunity to{" "}
        <span>share and publish</span> your work showcase!
      </h3>
      <RegisterationForm />
      <Footer />
    </div>
  );
}
