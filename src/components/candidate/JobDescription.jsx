import React from "react";
import Navbar from "../Navbar";
import { useLocation } from "react-router-dom";
import { Box, Stack, TextField, Typography } from "@mui/material";

const JobDescription = () => {
  const location = useLocation();
  const { id } = location.state || {};
  
  return (
    <>
      <Navbar />
      <Stack direction={{ xs: "column", sm: "row" }}>
        <Stack
          padding={"1rem 2rem"}
          spacing={1.5}
          width={{ xs: "100%", sm: "60%" }}
          marginTop={"1rem"}
        >
          <Typography
            fontWeight={"bold"}
            fontSize={{ xs: "1.1rem", sm: "1.5rem" }}
          >
            APPLICATION CONSULTANT
          </Typography>
          <Stack spacing={1}>
            <div className="heading">
              <Typography fontSize={"1rem"} fontWeight={"bold"}>
                Job Brief
              </Typography>
            </div>
            <Typography
              sx={{ fontSize: { sm: "0.8rem", md: "1rem" } }}
              color={"#555"}
            >
              {id}
              Abdullah LTD is a leading provider of innovative technology
              solutions and services, dedicated to helping businesses transform
              and succeed in the digital age. We are committed to delivering
              exceptional customer experiences and driving operational
              excellence We are seeking a motivated and detail-oriented
              Associate Platform Consultant to join our dynamic team. In this
              role, you will support the implementation and optimization of our
              platform solutions for clients. You will work closely with senior
              consultants, project managers, and clients to ensure the
              successful deployment and adoption of our technologies.
            </Typography>
          </Stack>
          {/* 2 */}
          <Stack spacing={1}>
            <div className="heading">
              <Typography fontSize={"1rem"} fontWeight={"bold"}>
                Key Responsibilities
              </Typography>
            </div>
            <Typography
              sx={{ fontSize: { sm: "0.8rem", md: "1rem" } }}
              color={"#555"}
            >
              Abdullah LTD is a leading provider of innovative technology
              solutions and services, dedicated to helping businesses transform
              and succeed in the digital age. We are committed to delivering
              exceptional customer experiences and driving operational
              excellence We are seeking a motivated and detail-oriented
              Associate Platform Consultant to join our dynamic team. In this
              role, you will support the implementation and optimization of our
              platform solutions for clients. You will work closely with senior
              consultants, project managers, and clients to ensure the
              successful deployment and adoption of our technologies.
            </Typography>
          </Stack>
          {/* 3 */}
          <Stack spacing={1}>
            <div className="heading">
              <Typography fontSize={"1rem"} fontWeight={"bold"}>
                Qualification
              </Typography>
            </div>
            <Typography
              sx={{ fontSize: { sm: "0.8rem", md: "1rem" } }}
              color={"#555"}
            >
              Abdullah LTD is a leading provider of innovative technology
              solutions and services, dedicated to helping businesses transform
              and succeed in the digital age. We are committed to delivering
              exceptional customer experiences and driving operational
              excellence We are seeking a motivated and detail-oriented
              Associate Platform Consultant to join our dynamic team. In this
              role, you will support the implementation and optimization of our
              platform solutions for clients. You will work closely with senior
              consultants, project managers, and clients to ensure the
              successful deployment and adoption of our technologies.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          marginTop={"3rem"}
          width={{ xs: "80%", sm: "35%" }}
          marginLeft={"2rem"}
        >
          <div className="heading">
            <Typography fontSize={"1rem"}>Apply For This Position</Typography>
          </div>
          <form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              padding: "1rem",
              maxHeight: "75vh",
              //   background: "green",
              overflow: "auto",
              marginLeft: "-1rem",
            }}
            className="campaign-form"
          >
            <style>
              {`
          ::-webkit-scrollbar {
            width: 5px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #09cc7f;
          }
        `}
            </style>
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              type="number"
            />
            <TextField
              id="standard-basic"
              label="Email Address"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Phone Number"
              variant="standard"
              type="number"
            />
            <TextField
              id="standard-basic"
              label="Work Experience"
              variant="standard"
              type="number"
            />
            <label
              for="skills"
              style={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              Select Skill:
            </label>
            <select
              id="skills"
              name="skills"
              style={{ border: "2px solid #222", padding: "0.3rem" }}
            >
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="Express.js">Express.js</option>
              <option value="MongoDB">MongoDB</option>
            </select>
            <Box>
              <Typography>Add Certificate</Typography>
              <input type="file" name="profile" className="input-file" />
            </Box>
            <Box>
              <Typography>Add Resume</Typography>
              <input type="file" name="profile" className="input-file" />
            </Box>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
              <button
                className="btn1"
                // onClick={() => navigate("/campaign")}
              >
                Submit Application
              </button>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </>
  );
};

export default JobDescription;
