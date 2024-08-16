import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import { question } from "../data";

const Test = () => {
  return (
    <>
      <Navbar />
      <Stack
        p={{
          lg: "2rem 12rem 1rem 12rem",
          md: "2rem 6rem 1rem 6rem",
          xs: "2rem 0.5rem 1rem 0.5rem",
        }}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Typography
          fontSize={{ xs: "1rem", sm: "1.2rem" }}
          fontWeight={{ xs: "light", sm: "bold" }}
        >
          Total Questions :30
        </Typography>
        <Typography
          fontSize={{ xs: "1rem", sm: "1.2rem" }}
          fontWeight={{ xs: "light", sm: "bold" }}
        >
          Time :1 hr 15 min
        </Typography>
      </Stack>
      <Stack
        marginTop={"1rem"}
        p={{ xs: "0rem 1rem", sm: "0rem 4rem", md: "0rem 10rem" }}
      >
        {question.map((q) => (
          <>
            <Typography
              marginTop={"1.5rem"}
              fontSize={"1rem"}
              fontWeight={"bold"}
            >
              {q.Qno1} {q.Q}
            </Typography>
            <Stack bgcolor={"#e8e9eb"} width={"100%"} p={"1rem"}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value={q.A} control={<Radio />} label={q.A} />
                <FormControlLabel value={q.B} control={<Radio />} label={q.B} />
                <FormControlLabel
                  value="Initialize a newly created object"
                  control={<Radio />}
                  label="Initialize a newly created object"
                />
                <FormControlLabel
                  value="To create a subclass"
                  control={<Radio />}
                  label="To create a subclass"
                />
              </RadioGroup>
            </Stack>
          </>
        ))}
        <button className="btn1" style={{ width: "150px" }}>Submit</button>
      </Stack>
    </>
  );
};

export default Test;
