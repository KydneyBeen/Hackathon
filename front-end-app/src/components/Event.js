import React, {Component } from 'react'

class Event extends Component {
    render() {
        console.log('Event log', this.props)
        return (
            <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.timeDate}-{this.props.timeTime} </p>
                    <a className='btn btn-primary' onClick={() => {this.props.funcCurrEvent(this.props.id)}}>View Event</a>
                </div>
            </div>
        )
    }
}

export default Event