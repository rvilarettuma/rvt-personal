import React from "react";
import SkillsModal from "../Skills/SkillsModal";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';

function buildJob(props) {
    var result = [];
    const title = props.job.title;
    const company = props.job.company;
    const dates = props.job.dates;
    const skills = props.job.skills;
    var skillsComponents = [];
    skillsComponents.push(
        Array.from(skills).map((_, index) => (
            <Typography key={`${company}-skills-${index}`}>
                {skills[index]}
            </Typography>
        ))
    )
    const skillsSize = Object.keys(skills).length;
    let skillsTitle = "";
    switch (skillsSize) {
        case 0:
            skillsTitle = "Skills"
            break;
        case 1:
            skillsTitle = skills[0]
            break;
        case 2:
            skillsTitle = `${skills[0]} and ${skills[1]} `
            break;
        default:
            skillsTitle = `${skills[0]}, ${skills[1]} and +${skillsSize - 2} skills`
    }
    const bullets = props.job.bullets;
    var bulletsComponents = [];
    bulletsComponents.push(
        Array.from(bullets).map((_, index) => (
            <ListItem key={`${title}-bullets-${index}`}>
                {bullets[index]}
            </ListItem>
        ))
    )

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
                    {bulletsComponents}
                </List>
            </CardContent>
            <CardActions>
                <SkillsModal title={skillsTitle} skills={skillsComponents} />
            </CardActions>
        </Card>
    )
    return result;
}

function Job(props) {
    return (
        <div className="resume-section">
            {buildJob(props)}
        </div>
    );
}

export default Job;
