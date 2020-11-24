import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import axios from "axios";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onMsgChange(event) {
    this.setState({ message: event.target.value });
  }

  submitEmail(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }
  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }

  render() {
    return (
      <div>
        <div className="subheader">
          <Typography variant="h3" h3>
            Contact
          </Typography>
          <hr />
        </div>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth variant="filled" label="Name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth variant="filled" label="Email" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="filled"
                multiline
                label="Message"
                rows={4}
                placeholder="Message"
              />
            </Grid>
            <Grid item>
              <Button variant="outlined" size="large" endIcon={<Send />}>
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
