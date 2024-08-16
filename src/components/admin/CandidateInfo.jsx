import React from "react";
import Navbar from "../Navbar";
import TablePage from "../TablePage";
import { Stack, Typography } from "@mui/material";
import TableActions from "../TableActions";
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
  { id: "email", name: "Cnd_Email" },
  { id: "fname", name: "cnd_fname" },
  { id: "mname", name: "cnd_Mname" },
  { id: "lname", name: "cnd_Lname" },
  { id: "contact", name: "cnd_Contact" },
  { id: "city", name: "cnd_City" },
  { id: "adress", name: "cnd_Address" },
  { id: "actions", name: "" },
];
const job_data = [
  {
    id: "1",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    contact: "+92304 3042589",
    city: "Hyderabad",
    adress: "Banglow no 5, Mehbob town tando jam",
  },
  {
    id: "1",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    contact: "+92304 3042589",
    city: "Hyderabad",
    adress: "Banglow no 5, Mehbob town tando jam",
  },
  {
    id: "1",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    contact: "+92304 3042589",
    city: "Hyderabad",
    adress: "Banglow no 5, Mehbob town tando jam",
  },
  {
    id: "1",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    contact: "+92304 3042589",
    city: "Hyderabad",
    adress: "Banglow no 5, Mehbob town tando jam",
  },
  {
    id: "1",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    contact: "+92304 3042589",
    city: "Hyderabad",
    adress: "Banglow no 5, Mehbob town tando jam",
  },
  {
    id: "1",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    contact: "+92304 3042589",
    city: "Hyderabad",
    adress: "Banglow no 5, Mehbob town tando jam",
  },
  {
    id: "1",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    contact: "+92304 3042589",
    city: "Hyderabad",
    adress: "Banglow no 5, Mehbob town tando jam",
  },
  {
    id: "1",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    contact: "+92304 3042589",
    city: "Hyderabad",
    adress: "Banglow no 5, Mehbob town tando jam",
  },
  {
    id: "1",
    email: "ammarraza2527@gmail.com",
    fname: "Amaar",
    mname: "Hassnain",
    lname: "Raza",
    contact: "+92304 3042589",
    city: "Hyderabad",
    adress: "Banglow no 5, Mehbob town tando jam",
  },
];

const CandidateInfo = () => {
  return (
    <>
      <Navbar menu={hr} />
      <Stack p={"3rem 4.5rem 0rem  4.5rem"} spacing={4}>
       
        <Typography bgcolor={"#222"} color={"#fff"} p={"1rem 1rem"}>
          Candidate Infromation
        </Typography>
      </Stack>
      <TableActions columns={columns} data={job_data} />
    </>
  );
};

export default CandidateInfo;
