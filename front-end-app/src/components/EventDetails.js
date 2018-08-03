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
                        <img src={currEvent.images[0].url} alt=""/>
                        <h2>{currEvent.name}</h2>
                        <p>{currEvent.dates.start.localTime}</p>
                        <p>{currEvent._embedded.venues[0].name}</p>
                        <button><a href={currEvent.url}>Buy Now</a></button>


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


