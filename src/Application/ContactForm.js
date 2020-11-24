import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

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
          </Grid>
        </form>
      </div>
    );
  }
}

export default ContactForm;
