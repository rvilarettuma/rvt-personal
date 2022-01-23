import React from 'react';
import text from './Text.json'
import { Typography } from '@mui/material';

function About() {
  return (
    <div>
      <h2>About</h2>
      <Typography variant="p"><strong>{text.greeting}</strong></Typography>
      <br/>
      <br/>
      <Typography variant="p">{text.about}</Typography>
    </div>
  );
}

export default About;