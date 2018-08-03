import React, {Component } from 'react'

class Event extends Component {
    render() {
        console.log('Event log', this.props)
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.timeDate} </td>
                <td>{this.props.timeTime} </td>
                <td><i className='material-icons' onClick={() => {this.props.funcCurrEvent(this.props.id)}}>arrow_forward_ios</i></td>
            </tr>
        )
    }
}

export default Event