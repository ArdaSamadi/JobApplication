import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Paper,
} from "@mui/material";
import backgroundImage from "../images/background.jpg";
import { sendData } from "./sendData";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  fileInput: {
    display: "none",
  },
  uploadButton: {
    marginTop: theme.spacing(1),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(3),
    margin: "auto",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minHeight: "60vh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const UserForm = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [fieldOfWork, setFieldOfWork] = useState("");
  const [resume, setResume] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFieldOfWorkChange = (event) => {
    setFieldOfWork(event.target.value);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("First name:", firstName);
    console.log("Last name:", lastName);
    console.log("Phone number:", phoneNumber);
    console.log("Email:", email);
    console.log("Field of work:", fieldOfWork);
    console.log("Resume:", resume);
    sendData(firstName, lastName, phoneNumber, email, fieldOfWork);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Grid container style={{ paddingTop: "8vw" }}>
        <Grid item xl={3} xs={0} sm={0} md={2}></Grid>
        <Grid item xl={6} xs={12} sm={12} md={8}>
          <Paper className={classes.paper} elevation={3}>
            <Typography variant="h5" component="h1" gutterBottom>
              Apply for a job
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <FormControl>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h5" align="center">
                      User Information
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="First Name"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Last Name"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      type="tel"
                      label="Phone Number"
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      label="Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel>Field of Work</InputLabel>
                      <Select
                        value={fieldOfWork}
                        onChange={(event) => setFieldOfWork(event.target.value)}
                      >
                        <MenuItem value="UI/UX Designer">
                          UI/UX Designer
                        </MenuItem>
                        <MenuItem value="React JS Developer">
                          React JS Developer
                        </MenuItem>
                        <MenuItem value="Next JS Developer">
                          Next JS Developer
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      accept=".pdf,.doc,.docx"
                      className={classes.fileInput}
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={(event) => setResume(event.target.files[0])}
                    />
                    <label htmlFor="contained-button-file">
                      <Button
                        variant="contained"
                        component="span"
                        className={classes.uploadButton}
                      >
                        Upload Resume
                      </Button>
                    </label>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      align="center"
                    >
                      {resume && resume.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.submitButton}
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </FormControl>
            </form>
          </Paper>
        </Grid>
        <Grid item xl={3} md={2} sm={0} lg={3} xs={0}></Grid>
      </Grid>
    </div>
  );
};

export default UserForm;
