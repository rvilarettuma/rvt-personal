import React from "react";
import jobs from "./Text.json";
import { Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Job from "../Job/Job";

function getJobs() {
    var jobsArray = jobs;
    var result = [];
    for (const job in jobsArray) {
        result.push(
            <Job job={jobsArray[job]} />
        )  
    }
    return result;
}

function Resume() {
    const theme = useTheme();
    return (
        <div className="resume-section">
            <Typography component="h3" variant="h4" sx={{ backgroundColor: `${theme.palette.accent.main}`, boxShadow: `4px 4px ${theme.palette.text.primary}`, padding: "0.5rem"}}>
                Resume
            </Typography>
            {getJobs()}
        </div>
    );
}

export default Resume;