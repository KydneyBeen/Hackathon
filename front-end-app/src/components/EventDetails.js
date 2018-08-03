import React, {Component } from 'react'
import Calendar from './Calendar'
import Map from './Map'

class EventDetails extends Component {

    render() {
        console.log('EventDetails log', this.props.currEvent)
        
        
       
        return (
            <div className='eventDetails'>
                <h1>Event Details</h1>
                {!this.props.currEvent ? <p> 'loading .... ' </p> : 
                <div>
                    <div className='eventDetailsItems'>
                        <h2>{this.props.currEvent.title}</h2>
                        <p>{this.props.currEvent.description}</p>
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


