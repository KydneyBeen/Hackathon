import React, {Component } from 'react'
import Calendar from './Calendar'
import Map from './Map'
import axios from "axios"

class EventDetails extends Component {
    
    render() {
    const {events, match} = this.props
    const currEvent = events.find(event => {
           return event.id === match.params.eventID
       })

        return (
            <div className='eventDetails'>
                <h1>Event Details</h1>
                 {!currEvent ? <p>Loading...</p> :
                <div>
                    <div className='eventDetailsItems'>
                        <h2>{currEvent.title}</h2>
                        <p>{currEvent.description}</p>
                        Hello
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


