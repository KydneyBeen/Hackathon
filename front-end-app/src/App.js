import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import {Search, EventList, NavBar, Jumbotron} from  './components'


class App extends Component {
  
  state = {
    events: [],
    apiKey: 'AIzaSyD6Y-jvO7HIRAAwTKIWiVcAZJf8ywR1MDs',
    location: '',
    search: ''
  }

  filteredEvents = (searchQuery, location) => {
    this.setState({
      location: location,
      search: searchQuery
    },() => {
      axios.get(`http://localhost:8000/${this.state.location}/${this.state.search}`)
        .then(response => {
          console.log(response.data)
        this.setState({
          events: response.data
        })
      })
    })
  }
  
  componentDidMount() {
    axios.get('http://localhost:8000/')
    .then(response => {
      const eventsArray = response.data
      this.setState({
        events: eventsArray
        })
      })
      .catch(error => {
          console.log(error)
      })
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron />
        <Search filteredEvents={this.filteredEvents}/>
        <EventList events={this.state.events}/>
      </div>
    )
  }
}

export default App;
