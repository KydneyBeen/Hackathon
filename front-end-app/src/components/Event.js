import React, {Component } from 'react'
import {Link} from 'react-router-dom'

class Event extends Component {
    render() {
        console.log('Event log', this.props)
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.timeDate}-{this.props.timeTime} </p>
                    <Link to={'/event/' + this.props.id }><a className='btn btn-primary eventBtn' onClick={() => {this.props.funcCurrEvent(this.props.id)}}>Purchase Tickets</a></Link>
                </div>
            </div>
        )
    }
}

export default Event