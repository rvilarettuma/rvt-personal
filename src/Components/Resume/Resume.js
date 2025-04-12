import React from "react";
import jobs from "./Text.json";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';



function getJobs() {
    var jobsArray = jobs;
    var result = [];

    for (const job in jobsArray) {
        var title = jobsArray[job].title;
        var company = jobsArray[job].company;
        var dates = jobsArray[job].dates;
        var bullets = [];
        for (const i in jobsArray[job].bullets) {
            bullets.push(
                <ListItem>
                    {jobsArray[job].bullets[i]}
                </ListItem>
            )
        };
        var skills = [];
        for (const i in jobsArray[job].skills) {
            skills.push(
                <Chip color="primary" label={jobsArray[job].skills[i]} />
            )
        };

        result.push(
            <Card>
                <CardHeader title={title} subheader={<>
                    <Stack direction="row" justifyContent='space-between'>
                        <Box align="left">
                            <Typography>{company}</Typography>
                        </Box>
                        <Box align="right">
                            <Typography>{dates}</Typography>
                        </Box>
                    </Stack>
                </>} />
                <CardContent>
                    <List key="bullets-list" dense>
                        {bullets}
                    </List>
                    <Stack direction="row" spacing={3}>
                        {skills}
                    </Stack>
                </CardContent>
            </Card>
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