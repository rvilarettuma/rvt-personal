import React from "react";
import text from "./Text.json";
import { Typography } from "@mui/material";

function About() {
  return (
    <div className="section">
      <Typography component="h2" variant="h4">
        About
      </Typography>
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
