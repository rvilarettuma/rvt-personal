import React from "react";
import jobs from "./Text.json";
import { Typography } from "@mui/material";
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
    return (
        <div className="resume-section">
            <Typography component="h2" variant="h4">
                Resume
            </Typography>
            {getJobs()}
        </div>
    );
}

export default Resume;