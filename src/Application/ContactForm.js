import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      open: false,
    };
  }

  render() {
    return (
      <div className="section">
        <div className="subheader">
          <Typography variant="h3">Contact</Typography>
          <hr />
        </div>
        <form
          action="https://formspree.io/f/xleowjdq"
          autoComplete="off"
          onSubmit={this.submitForm}
          method="POST"
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                id="name"
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
                id="email"
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
                id="message"
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
              <Button
                type="submit"
                variant="outlined"
                size="large"
                endIcon={<Send />}
              >
                Submit
              </Button>
              {this.state.status === "SUCCESS" && (
                <Snackbar
                  open={this.state.open}
                  autoHideDuration={6000}
                  onClose={this.handleClose}
                >
                  <Alert onClose={this.handleClose} severity="success">
                    Email sent successfully!
                  </Alert>
                </Snackbar>
              )}
              {this.state.status === "ERROR" && (
                <Snackbar
                  open={this.state.open}
                  autoHideDuration={6000}
                  onClose={this.handleClose}
                >
                  <Alert onClose={this.handleClose} severity="error">
                    Error: Failed to send. Try again!
                  </Alert>
                </Snackbar>
              )}
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
        this.setState({ status: "SUCCESS", open: true });
      } else {
        this.setState({ status: "ERROR", open: true });
      }
    };
    xhr.send(data);
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };
}
