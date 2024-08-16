import { Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Stack width={"100%"} sx={{ position: "fixed", right: 0, bottom: 0 }}>
      <div className="top">
        <Typography>
          Euronet Pakistan <br />
          Muet, Jamshoro <br />
          NHW Hyderabad
        </Typography>
        <Typography>
          T: +92-21-2527-1006 <br />
          UAN: +92-21-111-SECURE <br />
          pakistan-info@ceft.com
        </Typography>
        <div className="links">
          <Typography>ADDITIONAL</Typography>
          <ul>
            <li>
              <a>Use Cases</a>
            </li>
            <li>
              <a>News and Events</a>
            </li>
            <li>
              <a>investors</a>
            </li>
            <li>
              <a>Euronet word wide</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="links">
          <Typography>MAIN MENU</Typography>
          <ul>
            <li>
              <a>Use Cases</a>
            </li>
            <li>
              <a>News and Events</a>
            </li>
            <li>
              <a>investors</a>
            </li>
            <li>
              <a>Euronet word wide</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <Stack
        bgcolor={"#333"}
        width={"100%"}
        padding={{ xs: "1rem", sm: "1rem 4rem" }}
      >
        <Typography color={"#fff"} fontSize={{ xs: "0.7", sm: "1.2rem" }}>
          Copyright 2024 Euronet Worldwide. Inc, <br />
          Data Privacy Notice
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
