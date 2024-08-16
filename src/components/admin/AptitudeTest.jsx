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
  {id:"select",name:""},
  { id: "job", name: "Selected_Category" },
  { id: "question", name: "Question" },
  { id: "answer", name: "Answer" },
  { id: "option_a", name: "Option_A" },
  { id: "option_b", name: "Option_B" },
  { id: "option_c", name: "Option_C" },
];
const job_data = [
  {
    id: "1",
    job: "Fresh Graduate",
    question: "what is the full form of oop?",
    answer: "Otion B",
    option_a: "Objbect Organic Programming",
    option_b: "Objbect Oriented Programming",
    option_c: "Objbect Orange Program",
  },
  {
    id: "1",
    job: "Fresh Graduate",
    question: "what is the full form of oop?",
    answer: "Otion B",
    option_a: "Objbect Organic Programming",
    option_b: "Objbect Oriented Programming",
    option_c: "Objbect Orange Program",
  },
  {
    id: "1",
    job: "Fresh Graduate",
    question: "what is the full form of oop?",
    answer: "Otion B",
    option_a: "Objbect Organic Programming",
    option_b: "Objbect Oriented Programming",
    option_c: "Objbect Orange Program",
  },
  {
    id: "1",
    job: "Fresh Graduate",
    question: "what is the full form of oop?",
    answer: "Otion B",
    option_a: "Objbect Organic Programming",
    option_b: "Objbect Oriented Programming",
    option_c: "Objbect Orange Program",
  },
  {
    id: "1",
    job: "Fresh Graduate",
    question: "what is the full form of oop?",
    answer: "Otion B",
    option_a: "Objbect Organic Programming",
    option_b: "Objbect Oriented Programming",
    option_c: "Objbect Orange Program",
  },
  {
    id: "1",
    job: "Fresh Graduate",
    question: "what is the full form of oop?",
    answer: "Otion B",
    option_a: "Objbect Organic Programming",
    option_b: "Objbect Oriented Programming",
    option_c: "Objbect Orange Program",
  },
  {
    id: "1",
    job: "Fresh Graduate",
    question: "what is the full form of oop?",
    answer: "Otion B",
    option_a: "Objbect Organic Programming",
    option_b: "Objbect Oriented Programming",
    option_c: "Objbect Orange Program",
  },
  {
    id: "1",
    job: "Fresh Graduate",
    question: "what is the full form of oop?",
    answer: "Otion B",
    option_a: "Objbect Organic Programming",
    option_b: "Objbect Oriented Programming",
    option_c: "Objbect Orange Program",
  },
  {
    id: "1",
    job: "Fresh Graduate",
    question: "what is the full form of oop?",
    answer: "Otion B",
    option_a: "Objbect Organic Programming",
    option_b: "Objbect Oriented Programming",
    option_c: "Objbect Orange Program",
  },
];

const AptitudeTest = () => {
  return (
    <>
      <Navbar menu={hr} />
      <Stack p={"3rem 4.5rem 0rem  4.5rem"} spacing={4}>
        <button className="btn1" style={{ width: "200px" }}>
          Add Question
        </button>
        <Typography bgcolor={"#222"} color={"#fff"} p={"1rem 1rem"}>
          Aptitude Test Questions
        </Typography>
      </Stack>
      <TablePage columns={columns} data={job_data} />
    </>
  );
};

export default AptitudeTest;
