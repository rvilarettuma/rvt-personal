import React from "react";
import jobs from "../Resume/Text.json";
import { Typography } from "@mui/material";
import SkillsModal from "../Resume/SkillsModal";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';

function getLatestJob() {
    const latestJob = jobs[0];
    console.log(latestJob)
    var result = [];

    var title = latestJob.title;
    var company = latestJob.company;
    var dates = latestJob.dates;
    var skills = [];
    skills.push(
        Array.from(latestJob.skills).map((_, index) => (
            <Typography key={index}>
                {latestJob.skills[index]}
            </Typography>
        ))
    )

    const skillsSize = Object.keys(latestJob.skills).length;
    let skillsTitle = "";
    switch (skillsSize) {
        case 0:
            skillsTitle = "Skills"
            break;
        case 1:
            skillsTitle = latestJob.skills[0]
            break;
        case 2:
            skillsTitle = `${latestJob.skills[0]} and ${latestJob.skills[1]} `
            break;
        default:
            skillsTitle = `${latestJob.skills[0]}, ${latestJob.skills[1]} and +${skillsSize - 2} skills`
    }

    result.push(
        <Card sx={{ marginBottom: "1rem" }}>
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
                    {Array.from(latestJob.bullets).map((_, index) => (
                        <ListItem key={index}>
                            {latestJob.bullets[index]}
                        </ListItem>
                    ))}
                </List>
            </CardContent>
            <CardActions>
                <SkillsModal title={skillsTitle} skills={skills} />
            </CardActions>
        </Card>
    )
    return result;
}



function LatestJob() {
    return (
        <div className="resume-section">
            <Typography component="h2" variant="h4">
                Latest Position
            </Typography>
            {getLatestJob()}
        </div>
    );
}

export default LatestJob;