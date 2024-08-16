import React from "react";
import logo from "../assets/logo.png";
import { Link, Stack, TextField, Typography } from "@mui/material";

const Register = () => {
  return (
    <div className="center">
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        height={"100%"}
      >
        <Stack
          spacing={1}
          bgcolor={"#eee"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
          width={"35%"}
          display={{ xs: "none", md: "flex" }}
        >
          <img src={logo} alt="" style={{ width: "8rem", height: "6rem" }} />
          <Typography
            variant="p"
            width={"80%"}
            textAlign={"center"}
            fontSize={"1.3rem"}
            color={"#555"}
          >
            Discover endless career opportunities at Pakistan's premier online
            job portal, where top employers and job seekers connect effortlessly
            for success.
          </Typography>
        </Stack>
        <Stack
          width={{ xs: "100%", md: "65%" }}
          paddingLeft={{ xs: "0rem", md: "5rem" }}
        >
          <Stack spacing={2} width={{ lg: "70%", md: "80%", xs: "90%" }}>
            <Stack display={{ xs: "flex", md: "none" }}>
              <img
                src={logo}
                alt=""
                style={{ width: "8rem", height: "6rem" }}
              />
            </Stack>
            <Typography
              variant="h4"
              fontSize={{ xs: "1.5rem", md: "2rem" }}
              color={"#09cc7f"}
              fontWeight={"bold"}
            >
              Candidate Full Details
            </Typography>
            <form
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "1rem",
                maxHeight: "70vh",
                //   background: "green",
                overflow: "auto",
              }}
            >
              <TextField
                id="standard-basic"
                label="Candidate Id:"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="First Name"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Middle Name"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="standard"
              />
              <TextField id="standard-basic" label="Email" variant="standard" />
              <TextField
                id="standard-basic"
                label="Contact Number"
                variant="standard"
              />
              <TextField id="standard-basic" label="City" variant="standard" />
              <TextField
                id="standard-basic"
                label="Street Address"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Postal Code"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Country"
                variant="standard"
              />
              <TextField id="standard-basic" label="CNIC" variant="standard" />
              <TextField
                id="standard-basic"
                label="Gender"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Material Status"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Highest Education"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Work Experience"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Skills"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Referred By:"
                variant="standard"
              />

              <TextField
                id="standard-basic"
                label="Password"
                type="password"
                variant="standard"
              />
              <button className="btn">Register</button>
              <span style={{ fontSize: "16px" }}>
                Already have an account{" "}
                <Link href="/login" sx={{ cursor: "pointer" }}>
                  Sign in
                </Link>
              </span>
            </form>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Register;
