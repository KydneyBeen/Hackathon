import React, {Component } from 'react'

class EventDetails extends Component {
    render() {
        console.log('EventDetails log', this.props)
        return (
            <div>
                <p>Title: {this.props.title}</p>
                <p>Description: {this.props.title}</p>
                <p>Date: {this.props.title}</p>
                <p>Address: {this.props.title}</p>
            </div>
        )
    }
}

export default EventDetails