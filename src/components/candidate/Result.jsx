import { LocalLibrary } from "@mui/icons-material";
import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { dataId } from "../../data";
import GraphResult from "../GraphResult";

const Result = () => {
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
          {data.map((item) => (
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
        <GraphResult />
      </Stack>
    </Stack>
  );
};

export default Result;
