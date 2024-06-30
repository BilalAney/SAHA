/** @format */
import { useState } from "react";
import burger from "../assets/icons/burgerMenu.svg";
import styles from "../styles/BurgerMenu.module.css";
import cross from "../assets/icons/cross.svg";
export default function BurgerMenu({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={styles.burgerCtn}>
      <img
        src={isOpen ? cross : burger}
        onClick={() => setIsOpen((pre) => !pre)}
        style={{ height: "40%" }}
      />
      {isOpen && <ul className={styles.menuList}>{children}</ul>}
    </div>
  );
}
