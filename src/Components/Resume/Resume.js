import React from "react";
import jobs from "./Text.json";
import SkillsModal from "./SkillsModal";
import { Typography } from "@mui/material";
import Job from "../Job/Job";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';

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