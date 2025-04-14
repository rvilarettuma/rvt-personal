import React from "react";
import text from "./Text.json";
import FancyHeader from "../FancyHeader/FancyHeader";
import { CardHeader, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";

function About() {
  return (
    <div>
      <FancyHeader text="About" />
      <Card sx={{ marginBottom: "1rem" }}>
        <CardHeader title={text.greeting}></CardHeader>
        <CardContent>
          <Typography component="p" variant="p">
            {text.about}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default About;
