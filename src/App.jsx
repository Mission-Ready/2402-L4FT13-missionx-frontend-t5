import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";
import Instructions from "./pages/StudentDashboard/Instructions";
import LearningObjectives from "./pages/StudentDashboard/LearningObjectives";
import MakeProject from "./pages/StudentDashboard/MakeProject";
import VideoTutorial from "./pages/StudentDashboard/VideoTutorial";

import ProjectLibrary from "./pages/ProjectLibrary/ProjectLibrary";
import StudentProfileViewer from "./pages/StudentProfileViewer/StudentProfileViewer";
import SubmitProject from "./pages/StudentDashboard/SubmitProject";
import ProjectSubmissions from "./pages/TeacherDashboard/ProjectSubmissions";
import HelpRequests from "./pages/TeacherProfileViewer/HelpRequests";
import TeacherProfileView from "./pages/TeacherProfileViewer/TeacherProfileView";
import StudentProfiles from "./pages/TeacherDashboard/StudentProfiles";
import ProgressTracker from "./pages/TeacherDashboard/ProgressTracker"; 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/teacherdashboard" element={<TeacherDashboard />} />
        <Route path="/studentprofiles" element={<StudentProfiles />} />

        <Route path="/instructions" element={<Instructions />} />
        <Route path="/learningobjectives" element={<LearningObjectives />} />
        <Route path="/makeproject" element={<MakeProject />} />
        <Route path="/videotutorial" element={<VideoTutorial />} />

        <Route path="/projectlibrary" element={<ProjectLibrary />} />
        <Route
          path="/studentprofileviewer"
          element={<StudentProfileViewer />}
        />
        <Route path="/projectsubmissions" element={<ProjectSubmissions />} />
        <Route path="/submitproject" element={<SubmitProject />} />
        <Route path="/helprequests" element={<HelpRequests />} />
        <Route path="/teacherprofileviewer" element={<TeacherProfileView />} />
        <Route path="/progresstracker" element={<ProgressTracker />}/>
      </Routes>
    </>
  );
}

export default App;
