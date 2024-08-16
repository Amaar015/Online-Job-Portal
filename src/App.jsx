import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobDescription from "./components/candidate/JobDescription";
import StartQuiz from "./components/StartQuiz";
import Test from "./components/Test";
import CandidateTestLogin from "./components/candidate/CandidateTestLogin";
import Result from "./components/candidate/Result";
import JobDetails from "./components/admin/JobDetails";
import AptitudeTest from "./components/admin/AptitudeTest";
import CandidateInfo from "./components/admin/CandidateInfo";
import CandidateResume from "./components/admin/CandidateResume";
import ShortlistedResume from "./components/admin/ShortListedResumes";
import CandidateTestResult from "./components/admin/CandidateTestResult";
import Graph from "./components/admin/Graph";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/job-description" element={<JobDescription />} />
        {/* Create a private routes  */}
        <Route path="/test-start" element={<StartQuiz />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test-login" element={<CandidateTestLogin />} />
        <Route path="/candidate-test-result" element={<Result />} />

        {/* Admin Routes */}
        <Route path="/job-details" element={<JobDetails />} />
        <Route path="/aptitude-test" element={<AptitudeTest />} />
        <Route path="/candidate-information" element={<CandidateInfo />} />
        <Route path="/candidate-resumes" element={<CandidateResume />} />
        <Route path="/shortlisted-resumes" element={<ShortlistedResume />} />
        <Route path="/candidates-test" element={<CandidateTestResult />} />
        <Route path="/graph-result" element={<Graph />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
