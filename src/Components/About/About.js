import React from "react";
import text from "./Text.json";
import FancyHeader from "../FancyHeader/FancyHeader";
import { Typography } from "@mui/material";

function About() {
  return (
    <div className="section">
      <FancyHeader text="About"/>
      <br />
      <div>
        <Typography component="p" variant="p">
          {text.greeting}
        </Typography>
        <br />
        <Typography component="p" variant="p">
          {text.about}
        </Typography>
      </div>
    </div>
  );
}

export default About;
