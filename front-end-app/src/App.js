import React, { Component } from 'react';
import './App.css';
import {Search, EventList, Event, Map, EventDetails, Calendar} from  './components'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <EventList />
        <Event />
        <Map />
        <EventDetails />
        <Calendar />
      </div>
    );
  }
}

export default App;
