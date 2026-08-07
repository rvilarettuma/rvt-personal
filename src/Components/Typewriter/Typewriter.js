import React from "react";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";
import { useTheme } from '@mui/material/styles';

function TypewriterCustom() {
  const theme = useTheme();

  return (
    <div className="typewriter">
      <Typography component="h2" variant="h2" sx={{ background: `linear-gradient(120deg,${theme.palette.primary.main},${theme.palette.secondary.main})`, backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "SysAdmin",
              "Web Developer",
              "DevOps Engineer",
              "IT Generalist"
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>
    </div>
  );
}

export default TypewriterCustom;
