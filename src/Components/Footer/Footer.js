import React from "react";
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const dividerStyle = {
  bgcolor: 'background.paper',
  'margin-top': '5rem',
  'margin-bottom': '1rem',
  textAlign: 'center'
};

const iconStyle = {
  textAlign: 'center',
  color: 'text.secondary'
}
const d = new Date();
let year = d.getFullYear();

function Footer() {
  return (
    <div className="footer">
      <Divider sx={dividerStyle}/>
      <Grid container>
        <Grid sx={iconStyle} item xs={12}>
          <Link href="https://www.linkedin.com/in/richard-vilaret-tuma/">
            <IconButton aria-label="Go to Richard's LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </Link>
          <Link href="https://github.com/rvilarettuma">
            <IconButton aria-label="Go to Richard's GitHub">
              <GitHubIcon />
            </IconButton>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={iconStyle}
            >
            &#169; {year} Richard Vilaret-Tuma
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;