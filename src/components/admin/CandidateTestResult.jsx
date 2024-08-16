import React from "react";
import Navbar from "../Navbar";
import { FaRegFilePdf } from "react-icons/fa6";
import { Stack, Typography } from "@mui/material";
import TableActions from "../TableActions";
const hr = [
  "Job Detail",
  "Aptitud Test",
  "Candidate",
  "Shortlist Resume",
  "Final Shortlist Candidates",
  "Logout",
];

// table headings
const columns = [
  { id: "select", name: "" },
  { id: "email", name: "Cnd_Email" },
  { id: "fname", name: "cnd_fname" },
  { id: "score", name: "Test Score" },
  { id: "oop", name: "OOP Score" },
  { id: "ds", name: "DS Score" },
  { id: "gk", name: "GK Score" },
];
const job_data = [
  {
    id: "1",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    score: "78",
    oop: "27",
    ds: "47",
    gk: "06",
  },
  {
    id: "2",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    score: "78",
    oop: "27",
    ds: "47",
    gk: "06",
  },
  {
    id: "3",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    score: "78",
    oop: "27",
    ds: "47",
    gk: "06",
  },
  {
    id: "4",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    score: "78",
    oop: "27",
    ds: "47",
    gk: "06",
  },
  {
    id: "5",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    score: "78",
    oop: "27",
    ds: "47",
    gk: "06",
  },
  {
    id: "6",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    score: "78",
    oop: "27",
    ds: "47",
    gk: "06",
  },
  {
    id: "7",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    score: "78",
    oop: "27",
    ds: "47",
    gk: "06",
  },
  {
    id: "8",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    score: "78",
    oop: "27",
    ds: "47",
    gk: "06",
  },
  {
    id: "9",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    score: "78",
    oop: "27",
    ds: "47",
    gk: "06",
  },
];

const CandidateTestResult = () => {
  return (
    <>
      <Navbar menu={hr} />
      <Stack p={"3rem 4.5rem 0rem  4.5rem"} spacing={4}>
        <Typography bgcolor={"#222"} color={"#fff"} p={"1rem 1rem"}>
          Candidates Test Result
        </Typography>
      </Stack>
      <TableActions
        columns={columns}
        data={job_data}
        showFileIcon={false}
        assignTest={false}
        viewResultTest={true}
      />
    </>
  );
};

export default CandidateTestResult;
