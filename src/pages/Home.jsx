import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AdminHome from "../components/admin/Home";
import CandidateHome from "../components/candidate/Home";

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  const candidate = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Product and Services", link: "/products-services" },
    { name: "Careers", link: "/careers" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  const hr = [
    { name: "Job Detail", link: "/job-details" },
    { name: "Aptitude Test", link: "/aptitude-test" },
    {
      name: "Candidate",
      link: "#",
      subMenu: [
        { name: "Candidate Information", link: "/candidate-information" },
        { name: "Resume Information", link: "/candidate-resumes" },
        { name: "Results", link: "/candidates-test" },
        { name: "Interview", link: "/interview" },
      ],
    },
    { name: "Shortlist Resume", link: "/candidate-resumes" },
    { name: "Final Shortlist Candidates", link: "/shortlisted-resumes" },

    { name: "Logout", link: "/logout" },
  ];

  return (
    <>
      <Navbar menu={isAdmin ? hr : candidate} />
      {isAdmin ? <AdminHome /> : <CandidateHome />}
    </>
  );
};

export default Home;
