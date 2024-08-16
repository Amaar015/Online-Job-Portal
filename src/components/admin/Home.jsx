import { Stack, Typography } from "@mui/material";
import React from "react";
import Footer from "../Footer";

const AdminHome = () => {
  return (
    <>
      <Stack
        spacing={2}
        justifyContent={"center"}
        p={{ xs: "2rem  1.5rem", md: "3rem 6rem" }}
        alignItems={"center"}
      >
        <Typography fontSize={{ xs: "2rem", md: "3.5rem" }}>
          WELCOME HR !
        </Typography>
        <div className="box">
          <div className="boxs">
            <Typography fontSize={{ xs: "1.4rem", sm: "1.8rem" }}>
              Candidate Job
            </Typography>
            <Typography fontSize={{ xs: "1.4rem", sm: "1.8rem" }}>
              Request # 100
            </Typography>
          </div>
          <div className="boxs">
            <Typography fontSize={{ xs: "1.4rem", sm: "1.8rem" }}>
              Aptitude Test
            </Typography>
            <Typography fontSize={{ xs: "1.4rem", sm: "1.8rem" }}>
              Result # 100
            </Typography>
          </div>
          <div className="boxs">
            <Typography fontSize={{ xs: "1.4rem", sm: "1.8rem" }}>
              Shortlisted
            </Typography>
            <Typography fontSize={{ xs: "1.4rem", sm: "1.8rem" }}>
              Resumes # 100
            </Typography>
          </div>
        </div>
      </Stack>
      <Footer />
    </>
  );
};

export default AdminHome;
