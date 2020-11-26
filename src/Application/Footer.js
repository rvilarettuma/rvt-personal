import React from "react";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <Divider style={{ marginBottom: "2rem" }} />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Link href="https://www.linkedin.com/in/richard-vilaret-tuma/">
            <IconButton aria-label="Go to Richard's LinkedIn">
              <LinkedIn />
              <Typography variant="srOnly">Go to Richard's LinkedIn</Typography>
            </IconButton>
          </Link>
          <Link href="https://github.com/rvilarettuma">
            <IconButton aria-label="Go to Richard's GitHub">
              <GitHubIcon />
              <Typography variant="srOnly">Link to Richard's Github</Typography>
            </IconButton>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            style={{ textAlign: "center", padding: "12px", color: "#737170" }}
          >
            &#169; 2020 Richard Vilaret-Tuma
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
