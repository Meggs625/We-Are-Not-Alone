import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Form from '../Form/Form';
import { deleteData, fetchData } from '../util';
import Sightings from '../Sightings/Sightings';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      views: []
    }
  }

  componentDidMount() {
    fetchData()
    .then(data => this.setState({views: data}))
    .catch(err => console.log(err))
  }

  addSighting = (newSighting) => {
    this.setState({ views: [...this.state.views, newSighting]})
  }

  deleteSighting = (id) => {
    deleteData();
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
