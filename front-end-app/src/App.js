import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import {Search, EventList, Map, EventDetails, Calendar} from  './components'


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

  // componentDidUpdate() {
  //   param could be nearby, today, or tomorrow
  //   if(this.state.search === 'Today' || 'Tomorrow')
  //   axios.get(`http://localhost:8000/:`)
  // }
  
  render() {
    return (
      <div className="App">
        <Search filteredEvents={this.filteredEvents}/>
        <EventList events={this.state.events}/>
        <EventDetails/>
        <Calendar />
        <Map />
      </div>
    );
  }
}

export default App;
