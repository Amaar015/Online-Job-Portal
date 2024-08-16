import { LocalLibrary } from "@mui/icons-material";
import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import GraphResult from "../GraphResult";
import { useLocation } from "react-router-dom";
import { dataId } from "../../data";

const Graph = () => {
  const location = useLocation();
  const { rowId } = location.state;
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
      email: "barelog@gmail.com",
      fname: "Bare",
      mname: "Log",
      lname: "--",
      score: "94",
      oop: "49",
      ds: "34",
      gk: "33",
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
  // Find the object with the matching id
  const result = job_data.find((job) => job.id === rowId);

  // If found, store it in a new array
  const data = result ? [result] : [];

  return (
    <Stack p={{ xs: "1rem", sm: "1rem 3rem" }} spacing={2}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <LocalLibrary />
          </IconButton>
          <Typography
            variant={{ xs: "h4", sm: "h6" }}
            component={"div"}
            sx={{ flexGrow: 1 }}
          >
            Job Seeker
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          spacing={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Avatar />
          <Typography variant={{ xs: "h4", sm: "h6" }}>Bare Log</Typography>
        </Stack>
      </Stack>
      <Typography
        fontSize={"1.2rem"}
        fontWeight={"bold"}
        color={"#fff"}
        textAlign={"center"}
        sx={{ p: "0.5rem 1.5rem", width: "100%", bgcolor: "#333" }}
      >
        Job Listings
      </Typography>
      <Stack direction={{ sm: "column", md: "row" }} spacing={1}>
        <Stack spacing={4} width={"400px"} p={"0.5rem 1rem"}>
          <Typography
            fontSize={{ xs: "1rem", sm: "1.2rem" }}
            fontWeight={"bold"}
          >
            Your Submitted Application
          </Typography>
          {dataId.map((item) => (
            <Stack width={"100%"}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography>{item.no1}</Typography>
                <Typography>{item.title}</Typography>
              </Stack>
              <Divider />
            </Stack>
          ))}
        </Stack>
        {/* here add graphs */}
        <GraphResult job_data={data} />
      </Stack>
    </Stack>
  );
};

export default Graph;
