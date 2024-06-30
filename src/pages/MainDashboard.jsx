/** @format */

import { useContext, useEffect } from "react";
import Header from "../components/Header";
import ItemsContainer from "../components/ItemsContainer";
import LoadingPage from "../components/LoadingPage";
import ProjectItem from "../components/ProjectItem";
import { ProjectsProvider } from "../contexts/ProjectsContext";
import MainBoardSection from "../components/MainBoardSection";
import styles from "../styles/MainDashboard.module.css";
import { Outlet } from "react-router";

export default function MainDashboard() {
  return (
    <ProjectsProvider>
      <div className={styles.dashboard}>
        <Header />
        <Outlet />
      </div>
    </ProjectsProvider>
  );
}
