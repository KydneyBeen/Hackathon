import React, {Component } from 'react'
import Calendar from './Calendar'
import Map from './Map'

class EventDetails extends Component {
    render() {
        console.log('EventDetails log', this.props.currEvent)
       
        return (
            <div>
                {!this.props.currEvent ? <p> 'loading .... ' </p> : 
                <div>
                    <div>
                        <p>Title: {this.props.currEvent.title}</p>
                        <p>Description: {this.props.currEvent.description}</p>
                        <p>Address: {this.props.currEvent.address}</p>
                        <p>Time: {this.props.currEvent.time}</p> 
                    </div>
                    <Calendar currEvent={this.props.currEvent}/>
                    <Map currEvent={this.props.currEvent}/>
                </div>
            }
                
            </div>
        )
    }
}

export default EventDetails