import React from "react";
import { useState } from "react";
//import styling
import styles from "./css_components/StudentDashboard.module.css";
import "./css_components/StudentDashboard.css";
import levelupworks from "../../assets/NavBar/LevelUpWorks-blue.png";
import student from "../../../public/images/students/RawiriFletcher.png";

//component Imports
import Instructions from "./Instructions.jsx";
import LearningObjectives from "./LearningObjectives.jsx";
import VideoTutorial from "./VideoTutorial.jsx";
import MakeProject from "./MakeProject.jsx";

function StudentDashboard() {
  const [displayedContent, setDisplayedContent] = useState({
    name: "learning-objectives",
    component: <LearningObjectives />,
  });
  const handleContentClick = (event) => {
    console.log(event.target.id);

    //if else method
    // if (event.target.id === "instructions") {
    //   setDisplayedContent({ component: <Instructions /> });
    // } else if (event.target.id === "video-tutorial") {
    //   setDisplayedContent({ component: <VideoTutorial /> });
    // } else if (event.target.id === "make-project") {
    //   setDisplayedContent({ component: <MakeProject /> });
    // } else {
    //   setDisplayedContent({ component: <LearningObjectives /> });
    // }

    //switch method
    switch (event.target.id) {
      case "instructions":
        setDisplayedContent({
          name: "instructions",
          component: <Instructions />,
        });
        break;
      case "video-tutorial":
        setDisplayedContent({
          name: "video-tutorial",
          component: <VideoTutorial />,
        });
        break;
      case "make-project":
        setDisplayedContent({
          name: "make-project",
          component: <MakeProject />,
        });
        break;
      default:
        setDisplayedContent({
          name: "learning-objectives",
          component: <LearningObjectives />,
        });
    }
  };

  //the physical content of the page starts here
  return (
    <div className="body">
      <div className="header">
        <img
          className="levelupworkslogo-blue"
          src={levelupworks}
          alt="LevelUpWorksLogo-blue"
          img
        />
      </div>

      <div className="student-dashboard-navbar">
        <div className="student=photo">
          <img
            className="student-navbar-image"
            src={student}
            alt="Project01-instructions"
            img
          />
        </div>
        <button
          id="learning-objectives"
          onClick={handleContentClick}
          className={`${styles.btn} ${
            displayedContent.name === "learning-objectives" ? styles.active : ""
          } `}
        >
          Learning Objectives
        </button>
        <button
          id="instructions"
          onClick={handleContentClick}
          className={`${styles.btn} ${
            displayedContent.name === "instructions" ? styles.active : ""
          }`}
        >
          Instructions
        </button>
        <button
          id="video-tutorial"
          onClick={handleContentClick}
          className={`${styles.btn}  ${
            displayedContent.name === "video-tutorial" ? styles.active : ""
          }`}
        >
          Video Tutorial
        </button>
        <button
          id="make-project"
          onClick={handleContentClick}
          className={`${styles.btn} ${
            displayedContent.name === "make-project" ? styles.active : ""
          }`}
        >
          Make Project
        </button>
        {/*Student Dashboard Child Components
      <LearningObjectives />
      <Instructions />
      <MakeProject />
      <VideoTutorial />*/}
        {/* conditionally render the component*/}
        <div>{displayedContent.component}</div>;
      </div>
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default StudentDashboard;
