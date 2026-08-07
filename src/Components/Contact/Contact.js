import React from "react";
import { Typography } from "@mui/material";
import FancyHeader from "../FancyHeader/FancyHeader";

function Contact() {
  return (
    <div className="section">
            <FancyHeader text="Contact"/>
      <div className="section">
        <Typography component="p" variant="p">
          Feel free to contact me on LinkedIn!
        </Typography>
        </div>
    </div>
  );
}

export default Contact;