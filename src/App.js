import React, { Component } from 'react'
import Form from './Form'
import Display from './Display'
import Navbar from './Navbar'

class App extends Component {
  
  state = {
    formData: []
  }
  
  addedData = (userInput) => {
    console.log(userInput)

    this.setState({
      formData: [...this.state.formData, userInput]
    })
  }

  render() {
    return (
      <>
        <Navbar />
        <Form addedData={this.addedData} />
        <Display data = {this.state.formData} />
      </>
    )
  }
}

export default App