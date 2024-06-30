/** @format */

import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import styles from "../styles/LoginPage.module.css";

export default function Login() {
  return (
    <div className={styles.page}>
      <h1>
        Hi there, projects <span>are waiting!</span>
      </h1>
      <h2>Login now!</h2>
      <LoginForm />
      <Footer />
    </div>
  );
}
