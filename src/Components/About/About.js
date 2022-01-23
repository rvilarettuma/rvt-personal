import React from 'react';
import text from './Text.json'

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>{text.about}</p>
    </div>
  );
}

export default About;