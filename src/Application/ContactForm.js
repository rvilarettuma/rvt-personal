import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <div className="subheader">
          <Typography variant="h3">Contact</Typography>
          <hr />
        </div>
        <form  action="https://formspree.io/f/xleowjdq" autoComplete="off" onSubmit={this.submitForm} method="POST">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                fullWidth
                variant="filled"
                label="Name"
                required
                type="text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                fullWidth
                variant="filled"
                label="Email"
                required
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                fullWidth
                variant="filled"
                multiline
                label="Message"
                rows={4}
                placeholder="Message"
                type="text"
              />
            </Grid>
            <Grid item>
              {status === "SUCCESS" ? <Typography variant="caption">Thanks!</Typography> : <Button type="submit" variant="outlined" size="large" endIcon={<Send />}>Submit</Button>}
              {status === "ERROR" && <Typography variant="caption">Oops, there was an error!</Typography>}
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
