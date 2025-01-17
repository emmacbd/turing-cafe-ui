import React, { Component } from 'react';
import './App.css';
import Reservations from "./Reservations"
import Form from "./Form"

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [

      ]
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({reservations:data}))
  }

addResy = newResy => {
  this.setState({reservations:[...this.state.reservations, newResy]})
}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addResy={this.addResy}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
