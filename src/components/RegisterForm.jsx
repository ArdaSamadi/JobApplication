import React, { useState } from "react";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/zabout-background.png";
// import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
// import "./styles.css";
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
  Hidden,
} from "@mui/material";
import backgroundImage from "../images/background.jpg";
import { sendData } from "./UserForm/sendData";
// import { FileUpload } from "@mui/icons-material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
// import { sendData } from "./sendData";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: "auto",
    minWidth: 100,
  },
  fileInput: {
    display: "none",
  },
  uploadButton: {
    // marginTop: theme.spacing(1),
    borderRadius: "0.5rem",
  },
  submitButton: {
    marginTop: theme.spacing(2),
    borderRadius: "0.5rem",
  },
  paper: {
    backgroundColor: "#f5fff4",
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
    borderRadius: "1rem",
    boxShadow: "0rem 0rem 5rem 1rem #ffebd8,0rem 0rem 3rem 0.5rem #ffe3af",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const Register = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [fieldOfWork, setFieldOfWork] = useState("");
  const [resume, setResume] = useState("");
  const [submit, setSubmit] = useState(false);

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
    setSubmit(true);
    {
      if (
        firstName === "" ||
        lastName === "" ||
        phoneNumber === "" ||
        email === "" ||
        fieldOfWork === ""
      ) {
      } else {
        // console.log("First name:", firstName);
        // console.log("Last name:", lastName);
        // console.log("Phone number:", phoneNumber);
        // console.log("Email:", email);
        // console.log("Field of work:", fieldOfWork);
        // console.log("Resume:", resume);
        sendData(firstName, lastName, phoneNumber, email, fieldOfWork, resume);
      }
    }
  };

  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <div
        className="registerform-banner-container"
        // style={{ right: "0px", transform: "rotate(0)", margin: "auto" }}
      >
        <div className="registerform-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        {/* <div
          className="registerform-bannerImage2-container"
          style={{ overflow: "revert" }}
        >
          <img src={BannerImage} alt="" />
        </div> */}
        <div>
          <Grid container style={{ paddingTop: "2vw" }}>
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
                          helperText={
                            firstName === "" && submit
                              ? "First Name is required"
                              : null
                          }
                          error={firstName === "" && submit}
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
                          helperText={
                            lastName === "" && submit
                              ? "Last Name is required"
                              : null
                          }
                          error={lastName === "" && submit}
                          label="Last Name"
                          value={lastName}
                          onChange={(event) => setLastName(event.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          helperText={
                            phoneNumber === "" && submit
                              ? "Phone Number is required"
                              : null
                          }
                          error={phoneNumber === "" && submit}
                          type="tel"
                          label="Phone Number"
                          value={phoneNumber}
                          onChange={(event) =>
                            setPhoneNumber(event.target.value)
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          helperText={
                            email === "" && submit ? "Email is required" : null
                          }
                          error={email === "" && submit}
                          type="email"
                          label="Email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} lg={9}>
                        <FormControl fullWidth className={classes.formControl}>
                          <InputLabel>Field of Work</InputLabel>
                          <Select
                            helperText={
                              fieldOfWork === "" && submit
                                ? "Field of work is required"
                                : null
                            }
                            error={fieldOfWork === "" && submit}
                            value={fieldOfWork}
                            onChange={(event) =>
                              setFieldOfWork(event.target.value)
                            }
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
                      {/* <Grid item xs={0} lg={0} sm={0} xl={0} md={4}></Grid> */}
                      {/* <Hidden lgDown smUp>
                        <Grid md={4}></Grid>
                      </Hidden> */}
                      <Grid
                        item
                        xs={12}
                        lg={3}
                        md={12}
                        xl={3}
                        style={{
                          margin: "auto",
                          paddingTop: "0px",
                          //   height: "50%",
                        }}
                      >
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
                            style={{ height: "100%" }}
                          >
                            {/* <div style={{ height: "1px" }}> */}
                            <FileUploadIcon />
                            {/* </div> */}
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
        {/* <div className="home-text-section"></div> */}
        {/* <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Register;
