import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import {Search, EventList, Event, Map, EventDetails, Calendar} from  './components'


class App extends Component {
  
  state = {
    events: [],
    apiKey: AIzaSyD6Y-jvO7HIRAAwTKIWiVcAZJf8ywR1MDs,
    location: '',
    serach
  }

  filteredEvents = (searchQuery, location) => {
    this.setState({

    })
  }
  
  componentDidMount() {
    axios.get('http://localhost:8000/')
    .then(response => {
      const eventsArray = response.data
      this.setState({
        events: eventsArray
        }, () => {console.log(this.state)})
      })
      .catch(error => {
          console.log(error)
      })
  }
  
  render() {
    return (
      <div className="App">
        <Search filteredEvents={this.filteredEvents}/>
        <EventList { ...this.state}/>
        <EventDetails { ...this.state}/>
        <Calendar />
        <Map />
      </div>
    );
  }
}

export default App;
