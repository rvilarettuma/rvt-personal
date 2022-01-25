import React from "react";
import { Typography } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeIcon from "@mui/icons-material/Code";
import LinkIcon from "@mui/icons-material/Link";
import projects from "./Projects.json";

function getProjects() {
  var projectArray = projects;
  var result = [];

  for (const project in projectArray) {
    var name = projectArray[project].name;
    var stack = projectArray[project].stack;
    var description = projectArray[project].description;
    var link = projectArray[project].link;
    var source = projectArray[project].source;
    result.push(
      <Accordion key={name}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Stack>
            <Typography>
              <strong>{name}</strong>
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>{stack}</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
          <br/>
          <Stack direction="row" spacing={2}>
            {link ? (
              <Button variant="contained" href={link} startIcon={<LinkIcon />}>
                Project
              </Button>
            ) : null}
            {source ? (
              <Button
                variant="contained"
                href={source}
                startIcon={<CodeIcon />}
              >
                Source
              </Button>
            ) : null}
          </Stack>
        </AccordionDetails>
      </Accordion>
    );
  }

  return result;
}

function Projects() {
  return (
    <div>
      <Typography component="h2" variant="h4">
        Projects
      </Typography>
      <br/>
      {getProjects()}
    </div>
  );
}

export default Projects;
