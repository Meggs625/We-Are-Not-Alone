import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import Form from './Form';
import Sightings from './Sightings';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      views: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/sightings')
    .then(res => res.json())
    .then(data => this.setState({views: data}))
    .catch(err => console.log(err))
  }

  addSighting = (newSighting) => {
    this.setState({ views: [...this.state.views, newSighting]})
  }

  deleteSighting = (id) => {
    fetch(`http://localhost:3001/sightings/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const sightingsToKeep = this.state.views.filter(idea => idea.id !== id);
    this.setState({ views: sightingsToKeep })
  }

  render() {
    return (
      <Route exact path='/'>
        <main className='main-area'>
          <div className='top-area'>
            <Navbar />
            <Form addSighting={this.addSighting}/>        
          </div>
          <Sightings 
          views={this.state.views}
          deleteSighting={this.deleteSighting}
          />
        </main>      
      </Route>
      
    )
  }
}

export default App;
