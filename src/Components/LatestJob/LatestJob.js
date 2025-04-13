import React from "react";
import jobs from "../Resume/Text.json";
import { Typography } from "@mui/material";
import Job from "../Job/Job";

function LatestJob() {
    const latestJob = jobs[0];
    return (
        <div className="resume-section">
            <Typography component="h2" variant="h4">
                Latest Position
            </Typography>
            <Job job={latestJob}/>
        </div>
    );
}

export default LatestJob;