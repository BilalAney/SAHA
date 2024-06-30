/** @format */

import { Route, Routes } from "react-router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
// import OtherRegOptions from "./components/OtherRegOptions";
import LoadingPage from "./components/LoadingPage";
// import MainBoardSection from "./components/MainBoardSection";

const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Login = lazy(() => import("./pages/Login"));
const Registeration = lazy(() => import("./pages/Registeration"));
const MainDashboard = lazy(() => import("./pages/MainDashboard"));
const SearchingWindow = lazy(() => import("./pages/SearchingWindow"));
const NewProjectForm = lazy(() => import("./pages/NewProjectForm"));
const Project = lazy(() => import("./pages/Project"));
const OtherRegOptions = lazy(() => import("./pages/Project"));
const MainBoardSection = lazy(() => import("./components/MainBoardSection"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingPage />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="register" element={<Registeration />}>
              <Route path="options" element={<OtherRegOptions />} />
            </Route>

            <Route path="mainDashboard" element={<MainDashboard />}>
              <Route index path="dashboard" element={<MainBoardSection />} />

              <Route path="myShowcase" element={<MainBoardSection />} />

              <Route path="" element={<MainBoardSection />} />

              <Route path="search" element={<SearchingWindow />} />
            </Route>

            <Route path="newProject" element={<NewProjectForm />} />

            <Route path="Project/:?" element={<Project />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
