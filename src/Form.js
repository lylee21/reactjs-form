import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

export default class Form extends Component {
  //data to be passed down from parent component, app.js
  state = {
    name: "",
    dateOfBirth: "",
    email: "",
    contactNum: "",
    about: "",
    nameError: "",
    dobError: "",
    emailError: "",
    contactError: "",
    abtError: "",
    error: {
      nameErr: "",
      dateErr: "",
      emailErr: "",
      contactErr: "",
      abtErr: "",
    },
    validity: false,
  };

  changeHandler = (e) => {
    console.log('event '+ e)
    console.log('value '+e.target.value)
    console.log('id '+ e.target.id)
    
    if (e.target.id == 'nameInput') {
      this.nameValidation(e.target.value);
    }
    if (e.target.id == 'emailInput') {
      this.emailValidation(e.target.value);
    }
    if (e.target.id == 'numInput') {
      this.numValidation(e.target.value);
    }

    if (e.target.id == 'dobInput') {
      this.dobValidation(e.target.value);
    }

    if (e.target.id == 'abtInput') {
      this.abtValidation(e.target.value)
    }

  }

  nameValidation = (name) => {
    // let nameError = this.state.error.nameError;
    let nameError = this.state.nameError;
    let validity = this.state.validity;

    console.log('name '+name)

    if (name === '') {
      nameError = 'Please enter name';
      console.log(nameError)
      validity = false;
    } 
    else if (name.length <= 2) {
      nameError = 'Name should be more than 2 letters';
      console.log(nameError)
      validity = false;
    } 
    else {
      nameError = '';
      validity = true;
    }

    console.log(nameError)

    this.setState({
      name,
      nameError,
      // error: {...this.state.error, nameErr}, //only shows in console but not showing on ui for some reason
      validity
    });

    return validity;

  }

  emailValidation = (email) => {
    // let emailError = this.state.error.emailErr;
    let emailError = this.state.emailError;
    let validity = this.state.validity;

    let emailRegex = /.+@.+\.[A-Za-z]+$/

    if (!emailRegex.test(email)) {
      emailError = "Please enter a valid email";
      console.log(emailError)
    } else {
      validity = true
      emailError = ""
      console.log("valid email")
    }

    this.setState({
      email,
      emailError,
      // error: {...this.state.error, emailError},
      validity
    })

    return validity;

  };

  numValidation = (contact) => {
    // let numError = this.state.error.contactErr
    let numError = this.state.contactError
    let validity = this.state.validity
    let numRegex = /^[0-9]$/

    if(!numRegex.test(this.state.contactNum) && contact.length !== 8) {
      numError = "Contact Number should be 8 numeric characters"
      console.log(numError)
      validity = false;
      console.log(validity)
    }
    else {
      validity = true;
      numError = ""
      console.log(validity)
    }

    this.setState({
      contactNum: contact,
      numError,
      // error: {...this.state.error, numError},
      validity
    })

    return validity
  }

  abtValidation = (about) => {
    // let abtError = this.state.error.abtErr;
    let abtError = this.state.abtError;
    let validity = this.state.validity;

    console.log('abt function: '+about)

    if (about.trim() === '') {
      abtError = 'Please enter description';
      console.log(abtError)
      validity = false;
    } 
    else if (about.length < 10) {
      abtError = 'Please enter minimum 10 characters for description';
      console.log(abtError)
      validity = false;
    } 
    else {
      abtError = '';
      validity = true;
    }

    this.setState({
      about,
      abtError,
      // error: {...this.state.error, abtError},
      validity
    })

    return validity
  }

  dobValidation = (dob) => {
    // let dobError = this.state.error.dateErr
    let dobError = this.state.dobError
    let validity = this.state.validity

    console.log('dob: '+dob)

    let today = new Date().toISOString().slice(0, 10);
    console.log(today)
    console.log(dob<=today)

    if(dob>today){
      dobError = "Date of Birth cannot be greater than today"
      console.log(dobError)
      validity = false
    } else {
      dobError = ""
      validity = true
    }

    this.setState ({
      dateOfBirth: dob,
      dobError,
      // error: {...this.state.error, dobError},
      validity
    })

    return validity
  }

  handleSubmit = (e) => {
    e.preventDefault(); //prevents default field clearing behaviour of form submissions

    if(this.nameValidation(this.state.name) && this.emailValidation(this.state.email) && this.dobValidation(this.state.dateOfBirth) && this.numValidation(this.state.contactNum) && this.abtValidation(this.state.about)){
      alert('form submitted!')
      this.props.addedData(this.state)

      //clearing fields
      this.setState({
        name:'',
        dateOfBirth: '',
        email: '',
        contactNum: '',
        about: ''
      })
    } else {
      alert('Please check all input fields')
    }
  }

  render() {
    return (
      <>
        <Container maxWidth="lg">
          <Typography sx={{ my: 3 }} variant="h5">
            About Me Form
          </Typography>

          <form onSubmit={this.handleSubmit} >
            <Box sx={{ my: 3 }}>
              <label>Name: </label>
              <input type="text" onChange = {this.changeHandler} placeholder="Lily Li" id= "nameInput" value = {this.state.name}/>
              <span style={{ color: 'red' }}> {this.state.nameError}</span>
            </Box>
            <Box sx={{ my: 3 }}>
              <label>Date of Birth: </label>
              <input type="date" onChange = {this.changeHandler} id = "dobInput" />
              <span style={{ color: 'red' }}> {this.state.dobError}</span>
              {/* <span style={{ color: 'red' }}> {this.state.error.dateErr}</span> */}
            </Box>
            <Box sx={{ my: 3 }}>
              <label>Email: </label>
              <input type="text" onChange = {this.changeHandler} placeholder="lily@example.com" id= "emailInput" value = {this.state.email}/>
              <span style={{ color: 'red' }}> {this.state.emailError}</span>
              {/* <span style={{ color: 'red' }}> {this.state.error.emailErr}</span> */}
            </Box>
            <Box sx={{ my: 3 }}>
              <label>Contact Number: </label>
              <input type="text" onChange = {this.changeHandler} placeholder="98765432" id= "numInput" value = {this.state.contactNum} />
              <span style={{ color: 'red' }}> {this.state.numError}</span>
              {/* <span style={{ color: 'red' }}> {this.state.error.contactErr}</span> */}
            </Box>

            <Box sx={{ my: 3 }}>
              <label>Description: </label>
              <textarea onChange = {this.changeHandler} id= "abtInput" value = {this.state.about} placeholder="About Me..."></textarea>
              <span style={{ color: 'red' }}> {this.state.abtError}</span>
              {/* <span style={{ color: 'red' }}> {this.state.error.abtErr}</span> */}
            </Box>

            <Button type= "submit" sx={{ my: 3 }} variant="contained">
              Submit
            </Button>
          </form>
        </Container>
      </>
    );
  }
}
