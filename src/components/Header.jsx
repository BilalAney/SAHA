/** @format */

import Logo from "./Logo";
import styles from "../styles/Header.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";

const menuItems = (
  <>
    <li>
      <NavLink>My library</NavLink>
    </li>
    <li>
      <NavLink>Notifications</NavLink>
    </li>
    <li>
      <NavLink>Settings</NavLink>
    </li>
    <li>
      {/** TODO:: Here the account avatar... by clicking it, The account settings will appear */}
    </li>
  </>
);

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <header className={styles.header}>
      <Logo />
      {screenWidth > 600 ? (
        <ul className={styles.menu}>{menuItems}</ul>
      ) : (
        <BurgerMenu>{menuItems}</BurgerMenu>
      )}
    </header>
  );
}
