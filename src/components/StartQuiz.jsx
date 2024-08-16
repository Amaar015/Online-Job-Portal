import { Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const StartQuiz = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
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
          Euronet Recruitment Test
        </Typography>
        <Stack bgcolor={"#e8e9eb"} marginTop={"1rem"} width={"100%"} p={"1rem"}>
          <Typography
            sx={{ fontSize: { sm: "1rem", md: "1.2rem" } }}
            color={"#555"}
          >
            The test consists of 30 questions. <br /> You have a total time
            limit of 75 minutes to complete the test.
            <br /> Ensure you are logged in with your registered email to
            attempt the test.
            <br /> Click the "Start" button to begin the test.
            <br />
          </Typography>
        </Stack>
        <button
          onClick={()=>navigate("/test")}
          className="btn1"
          style={{ width: "200px" }}
        >
          Start Test
        </button>
      </Stack>
    </div>
  );
};

export default StartQuiz;
