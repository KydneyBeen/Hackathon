import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import {Route, Switch} from 'react-router-dom'
import {Search, EventList, EventDetails, NavBar, Jumbotron} from  './components'


class App extends Component {
  
  state = {
    events: [],
    apiKey: 'AIzaSyD6Y-jvO7HIRAAwTKIWiVcAZJf8ywR1MDs',
    location: '',
    search: '',
    homeLocation: ''
  }

  filteredEvents = (searchQuery, location) => {
    this.setState({
      location: location,
      search: searchQuery
    },() => {
      axios.get(`http://localhost:8000/${this.state.location}/${this.state.search}`)
        .then(response => {
        this.setState({
          events: response.data
        }, () => {console.log("State: ", this.state.events)})
      })
    })
  }

  getCity = (val) => {
    this.setState({
      homeLocation: val
    })
  }
  
  componentDidMount() {
    axios.get('http://localhost:8000/')
    .then(response => {
      console.log("Sydney", response.data)
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
      <div>
        <NavBar />
        <Jumbotron />
        <Search filteredEvents={this.filteredEvents}getCity = {this.getCity}/>
        <Switch>
          <Route exact path="/events" render={(routeProps)=><EventList
            {...routeProps}
            events={this.state.events}
            />}
          />
          <Route path='/event/:eventID'render={(routeProps)=><EventDetails
            {...routeProps}
            events={this.state.events}
            />}
          />
        </Switch>
        </div>
      </div>
    )
  }
}

export default App;
