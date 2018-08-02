import React, {Component } from 'react'

class EventDetails extends Component {
    render() {
        console.log('EventDetails log', this.props)
        return (
            <div>
                <p>Title: {this.props.title}</p>
                <p>Description: {this.props.description}</p>
                <p>Address: {this.props.address}</p>
                <p>Time: {this.props.time}</p>
            </div>
        )
    }
}

export default EventDetails