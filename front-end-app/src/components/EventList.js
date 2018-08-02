import React, {Component } from 'react'

class EventList extends Component {
    render() {
        console.log('EventList log', this.props)
        return (
             <h1>EventList Component</h1>
        )
    }
}

export default EventList