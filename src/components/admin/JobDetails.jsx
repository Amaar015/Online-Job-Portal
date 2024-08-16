import React from "react";
import Navbar from "../Navbar";
import TablePage from "../TablePage";
import { Stack, Typography } from "@mui/material";
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

// table headings
const columns = [
  { id: "select", name: "" },
  { id: "title", name: "Job_Title" },
  { id: "category", name: "Job_Category" },
  { id: "description", name: "Job_Description" },
  { id: "location", name: "Job_Location" },
  { id: "experience", name: "Req_Work_Exp" },
  { id: "seats", name: "Available_Seat" },
];
const job_data = [
  {
    id: "1",
    title: "Fresh Graduate",
    category: "Onsite",
    description: " display each user in the table based.",
    location: "Karachi",
    experience: "2-3",
    seats: "5",
  },
  {
    id: "1",
    title: "Fresh Graduate",
    category: "Onsite",
    description: " display each user in the table based.",
    location: "Karachi",
    experience: "2-3",
    seats: "5",
  },
  {
    id: "1",
    title: "Fresh Graduate",
    category: "Onsite",
    description: " display each user in the table based.",
    location: "Karachi",
    experience: "2-3",
    seats: "5",
  },
  {
    id: "1",
    title: "Fresh Graduate",
    category: "Onsite",
    description: " display each user in the table based.",
    location: "Karachi",
    experience: "2-3",
    seats: "5",
  },
  {
    id: "1",
    title: "Fresh Graduate",
    category: "Onsite",
    description: " display each user in the table based.",
    location: "Karachi",
    experience: "2-3",
    seats: "5",
  },
  {
    id: "1",
    title: "Fresh Graduate",
    category: "Onsite",
    description: " display each user in the table based.",
    location: "Karachi",
    experience: "2-3",
    seats: "5",
  },
  {
    id: "1",
    title: "Fresh Graduate",
    category: "Onsite",
    description: " display each user in the table based.",
    location: "Karachi",
    experience: "2-3",
    seats: "5",
  },
  {
    id: "1",
    title: "Fresh Graduate",
    category: "Onsite",
    description: " display each user in the table based.",
    location: "Karachi",
    experience: "2-3",
    seats: "5",
  },
  {
    id: "1",
    title: "Fresh Graduate",
    category: "Onsite",
    description: " display each user in the table based.",
    location: "Karachi",
    experience: "2-3",
    seats: "5",
  },
];

const JobDetails = () => {
  return (
    <>
      <Navbar menu={hr} />
      <Stack p={"3rem 4.5rem 0rem  4.5rem"} spacing={4}>
        <button className="btn1" style={{ width: "200px" }}>
          Add Jobs
        </button>
        <Typography bgcolor={"#222"} color={"#fff"} p={"1rem 1rem"}>
          Job Details
        </Typography>
      </Stack>
      <TablePage columns={columns} data={job_data} />
    </>
  );
};

export default JobDetails;
