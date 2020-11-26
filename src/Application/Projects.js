import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Code from "@material-ui/icons/Code";
import Link from "@material-ui/icons/Link";
import Button from "@material-ui/core/Button";

function Projects() {
  return (
    <div className="section">
      <div className="subheader">
      <Typography variant="h3">Projects</Typography>
        <hr />
      </div>
      <Card>
        <CardContent>
        <Typography variant="h4">Tabularium</Typography>
        <Typography variant="subtitle1" component="h5">React</Typography>
        <Typography variant="body1" component="p">A random generator based on themed tables for tabletop gamers,
            authors, and artists.</Typography>
        </CardContent>
        <CardActions>
          <Button aria-label="website link" startIcon={<Link />}href="https://ttt.rvtuma.com">Website</Button>
          <Button aria-label="github link" startIcon={<Code />}href="https://github.com/rvilarettuma/table-of-tables">Github</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Projects;
