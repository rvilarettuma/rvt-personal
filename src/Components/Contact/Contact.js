import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

function Contact() {
  const theme = useTheme();
  return (
    <div className="section">
      <Typography component="h3" variant="h4" sx={{ backgroundColor: `${theme.palette.accent.main}`, boxShadow: `4px 4px ${theme.palette.text.primary}`, padding: "0.5rem"}}>
        Contact
      </Typography>
      <div className="section">
        <Typography component="p" variant="p">
          Feel free to contact me on LinkedIn!
        </Typography>
        </div>
    </div>
  );
}

export default Contact;