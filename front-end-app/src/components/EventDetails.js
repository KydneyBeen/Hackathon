import React, {Component } from 'react'
import Calendar from './Calendar'
import Map from './Map'

class EventDetails extends Component {

    render() {
        const {events, match} = this.props
        console.log(match.params.eventID)
        const currEvent = events.find(event => {
            return event.id === match.params.eventID
        })
        return (
            <div className='eventDetails'>
                <h1>Event Details</h1>
                {!currEvent ? <p> 'loading .... ' </p> : 
                <div>
                    <div className='eventDetailsItems'>
                        <h2>{currEvent.title}</h2>
                        <p>{currEvent.description}</p>
                    </div>
                    <Calendar currEvent={currEvent}/>
                    <Map currEvent={currEvent}/>
                </div>
            }
                
            </div>
        )
    }
}

export default EventDetails


