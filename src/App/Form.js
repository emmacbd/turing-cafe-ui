import React, { Component } from "react"
import "./Form.css"


class Form extends Component {
  constructor(){
    super();
    this.state ={
      id: '',
      name: '',
      date: '',
      time: '',
      number: undefined,
    }
  }

handleChange = event => {
  this.setState({[event.target.name]:event.target.value})
}

  render(){
    return (
      <form className="form">
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='date'
          placeholder='Date (mm/dd)'
          name='datetime-local'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
          />

         <input
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
          />

        <input
          type='number'
          placeholder='Number of Guests'
          min="1"
          name='guests'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
          />

        <button className="resy-button">MAKE RESERVATION</button>
      </form>
    )
  }
}





export default Form;
