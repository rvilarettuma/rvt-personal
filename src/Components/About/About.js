import React from 'react';
import text from './Text.json'
import { Typography } from '@mui/material';

function About() {
  return (
    <div>
      <Typography component="h2" variant="h4">About</Typography>
      <Typography variant="p">{text.greeting}</Typography>
      <br/>
      <Typography variant="p">{text.about}</Typography>
    </div>
  );
}

export default About;