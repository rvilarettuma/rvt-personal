import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }
  onMsgChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    this.setState({ status: "Sending" });
    axios({
      method: "POST",
      url: "https://rvtuma.com:5000/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Message Sent");
        this.setState({ name: "", email: "", message: "", status: "Submit" });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }

  render() {
    return (
      <div>
        <div className="subheader">
          <Typography variant="h3">Contact</Typography>
          <hr />
        </div>
        <form
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="filled"
                label="Name"
                onChange={(e) => this.onNameChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="filled"
                label="Email"
                onChange={(e) => this.onEmailChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="filled"
                multiline
                label="Message"
                rows={4}
                placeholder="Message"
                onChange={(e) => this.onMsgChange(e)}
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
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default ContactForm;
