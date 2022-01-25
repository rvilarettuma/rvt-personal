import React from "react";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";

function typewriter() {
  return (
    <div className="typewriter">
      <Typography component="h2" variant="h3">
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "SysAdmin",
              "Web Developer",
              "DevOps Engineer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>
    </div>
  );
}

export default typewriter;
