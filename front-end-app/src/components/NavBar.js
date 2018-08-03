import React, {Component } from 'react'
import Search from './Search'

class NavBar extends Component {

    render() { 
        return (
            < nav className = "navbar fixed-top navbar-expand-lg navbarColor" >
              <div className="navbar-brand text-white">STYle Events</div>
              <Search filteredEvents={this.props.filteredEvents} getCity={this.props.getCity}/>
            </nav>
        )
    }
}

export default NavBar