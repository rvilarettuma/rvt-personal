import React from "react";
import text from "./Text.json";
import FancyHeader from "../FancyHeader/FancyHeader";
import { Typography, Box } from "@mui/material";

function About() {
  return (
    <div>
      <FancyHeader text="About" />
      <Box sx={{ marginBottom: "1rem", padding: "1rem"}}>
        <Typography component="h4" variant="h5">{text.greeting}</Typography>
        {/* <CardHeader title={text.greeting}></CardHeader> */}
          <Typography component="p" variant="p">
            {text.about}
          </Typography>
      </Box>
    </div>
  );
}

export default About;
