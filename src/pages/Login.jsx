import React from "react";
import logo from "../assets/logo.png";
import { Link, Stack, TextField, Typography } from "@mui/material";

const Login = () => {
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
            <Stack display={{ xs: "flex", md: "none" }} position={'absolute'} top={20} left={30}>
              <img
                src={logo}
                alt=""
                style={{ width: "6rem", height: "4rem" }}
              />
            </Stack>
            <Typography
              variant="h4"
              fontSize={{ xs: "1.5rem", md: "2rem" }}
              color={"#09cc7f"}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Log in
            </Typography>
            <form
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <TextField id="standard-basic" label="Email" variant="standard" />
              <TextField
                id="standard-basic"
                label="Password"
                type="password"
                variant="standard"
              />
              <button className="btn">Login</button>
              <span style={{ fontSize: "16px" }}>
                Don't have an account{" "}
                <Link href="/register" sx={{ cursor: "pointer" }}>
                  Create Account
                </Link>
              </span>
            </form>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Login;
