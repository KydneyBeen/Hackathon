import React, {Component } from 'react'

class Event extends Component {
    render() {
        // console.log('Event log', this.props)
        return (
            <tr>
                <td>Title: {this.props.title}</td>
                <td>Description: {this.props.description} </td>
                <td><i className='material-icons' onClick={() => {this.props.funcCurrEvent(this.props.id)}}>info</i></td>
            </tr>
        )
    }
}

export default Event