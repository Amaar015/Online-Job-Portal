import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { job } from "../../data";
import { useNavigate } from "react-router-dom";

const CandidateHome = () => {
  const [title, settitle] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    settitle(event.target.value);
  };
  const handeNaviagetion = () => {
    navigate(`/job-description`, { state: { id: 5 } });
  };
  return (
    <>
      <Stack
        p={{
          lg: "2rem 10rem 1rem 10rem",
          md: "2rem 6rem 1rem 6rem",
          xs: "2rem 2rem 1rem 2rem",
        }}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <button className="btn1">New Search</button>
        <button className="btn1">Login</button>
      </Stack>
      <Stack
        p={{
          lg: "2rem 10rem 1rem 10rem",
          md: "2rem 6rem 1rem 6rem",
          xs: "2rem 2rem 1rem 2rem",
        }}
        color={"#fff"}
      >
        {/* top */}
        <Typography
          fontSize={"1.2rem"}
          fontWeight={"bold"}
          sx={{ p: "0.5rem 1.5rem", width: "100%", bgcolor: "#333" }}
        >
          Job Listings
        </Typography>
        {/* bottom */}
        <Stack
          sx={{ background: "#999", p: "1.5rem" }}
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
        >
          <Stack>
            <Typography>Sort By:</Typography>
            {/* select box */}
            <FormControl variant="filled" size="small" sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">
                Title
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={title}
                onChange={handleChange}
                sx={{
                  backgroundColor: "white", // Background color
                  color: "white", // Text color
                  "& .Mui-focused": {
                    backgroundColor: "darkgreen", // Focus background color
                  },
                  "& .MuiInputBase-input": {
                    color: "white", // Text color inside the input
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "white", // Label color when focused
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "green", // Border color
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack>
            <Typography>Order:</Typography>
            {/* select box */}
            <FormControl variant="filled" size="small" sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">
                Ascending
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={title}
                onChange={handleChange}
                sx={{
                  backgroundColor: "white", // Background color
                  color: "white", // Text color
                  "& .Mui-focused": {
                    backgroundColor: "darkgreen", // Focus background color
                  },
                  "& .MuiInputBase-input": {
                    color: "white", // Text color inside the input
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "white", // Label color when focused
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "green", // Border color
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Acending</MenuItem>
                <MenuItem value={20}>Decending</MenuItem>
                <MenuItem value={30}>Random</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        //todo here call map functions
        <Stack spacing={2}>
          {job.map((data) => (
            <>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                marginTop={"0.8rem"}
              >
                <Stack width={"28%"} spacing={1} color={"#333"}>
                  <Typography
                    fontWeight={"500"}
                    sx={{ fontSize: { sm: "1rem", md: "1.2rem" } }}
                  >
                    Associate Platform Consultant
                  </Typography>
                  <Typography
                    color={"#666"}
                    xs={{ fontSize: { sm: "1rem", md: "1.2rem" } }}
                  >
                    Karachi
                  </Typography>
                </Stack>
                <Stack width={{ xs: "80%", sm: "60%" }}>
                  <Typography
                    sx={{ fontSize: { sm: "0.8rem", md: "1rem" } }}
                    color={"#555"}
                  >
                    Abdullah LTD is a leading provider of innovative technology
                    solutions and services, dedicated to helping businesses
                    transform and succeed in the digital age. We are committed
                    to delivering exceptional customer experiences and driving
                    operational excellence We are seeking a motivated and
                    detail-oriented Associate Platform Consultant to join our
                    dynamic team. In this role, you will support the
                    implementation and optimization of our platform solutions
                    for clients. You will work closely with senior consultants,
                    project managers, and clients to ensure the successful
                    deployment and adoption of our technologies.
                  </Typography>
                </Stack>
                <Stack>
                  <button onClick={handeNaviagetion} className="btn1">
                    View Job
                  </button>
                </Stack>
              </Stack>
              <Divider />
            </>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default CandidateHome;
