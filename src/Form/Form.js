import React, { Component } from 'react';
import { postData } from '../util';
import './Form.css';


class Form extends Component {
  constructor(){
    super()
    this.state = {
      location: '',
      description:''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  postSighting = (event) => {
    event.preventDefault();
    const newSighting = {
      ...this.state
    }
    postData(newSighting)
    .then(() => this.props.addSighting(newSighting))
    .catch((error) => console.log(error))
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ location: '', description: '' })
  }

  render() {
    return (
      <form className='form-info'>
        <h1>Fill out your sighting here:</h1>
        <div className='form-inputs'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={this.state.location}
            onChange={event => this.handleChange(event)}
          />

          <input
          type='text'
          placeholder='Description'
          name='description'
          value={this.state.description}
          onChange={event => this.handleChange(event)}
          />               
        </div>
        <button 
        className='submit'
        onClick={event => this.postSighting(event)}>Submit Experience</button>
      </form>
    )
  }
}

export default Form;