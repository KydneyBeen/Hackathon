import React, {Component } from 'react'

class Event extends Component {
    render() {
        console.log('Event log', this.props)
        return (
            <tr>
                <td>Title: {this.props.title}</td>
                <td>Description: {this.props.title}</td>
                <td>Date: {this.props.title}</td>
                <td>Address: {this.props.title}</td>
            </tr>
        )
    }
}

export default Event