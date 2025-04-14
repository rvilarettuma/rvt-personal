import React from "react";
import text from "./Text.json";
import { Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

function About() {
  const theme = useTheme();
  return (
    <div className="section">
      <Typography component="h3" variant="h4" sx={{ backgroundColor: `${theme.palette.accent.main}`, boxShadow: `4px 4px ${theme.palette.text.primary}`, padding: "0.5rem"}}>
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
