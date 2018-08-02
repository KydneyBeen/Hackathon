import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import {Search, EventList, Event, Map, EventDetails, Calendar} from  './components'


class App extends Component {
  
  state = {
    events: []
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
        <Search />
        <EventList />
        <Event />
        <Map />
        <EventDetails { ...this.state}/>
        <Calendar />
      </div>
    );
  }
}

export default App;
