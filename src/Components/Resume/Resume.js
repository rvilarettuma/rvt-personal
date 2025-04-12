import React from "react";
import jobs from "./Text.json";
import SkillsModal from "./SkillsModal";
import { Typography } from "@mui/material";
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
        var title = jobsArray[job].title;
        var company = jobsArray[job].company;
        var dates = jobsArray[job].dates;
        var skills = [];
        skills.push(
            Array.from(jobsArray[job].skills).map((_, index) => (
                <Typography key={index}>
                    {jobsArray[job].skills[index]}
                </Typography>
            ))
        )

        const skillsSize = Object.keys(jobsArray[job].skills).length;
        let skillsTitle = "";
        switch (skillsSize) {
            case 0:
                skillsTitle = "Skills"
                break;
            case 1:
                skillsTitle = jobsArray[job].skills[0]
                break;
            case 2:
                skillsTitle = `${jobsArray[job].skills[0]} and ${jobsArray[job].skills[1]} `
                break;
            default:
                skillsTitle = `${jobsArray[job].skills[0]}, ${jobsArray[job].skills[1]} and +${skillsSize - 2} skills`
        }

        result.push(
            <Card sx={{"margin-bottom": "1rem"}}>
                <CardHeader title={title} subheader={<>
                    <Stack direction="row" justifyContent='space-between'>
                        <Box align="left">
                            <Typography>{company}</Typography>
                        </Box>
                        <Box align="right">
                            <Typography component="p" textAlign="right">{dates}</Typography>
                        </Box>
                    </Stack>
                </>} />
                <CardContent>
                    <List key="bullets-list" dense>
                        {Array.from(jobsArray[job].bullets).map((_, index) => (
                            <ListItem key={index}>
                                {jobsArray[job].bullets[index]}
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
                <CardActions>
                    <SkillsModal title={skillsTitle} skills={skills}/>
                </CardActions>
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