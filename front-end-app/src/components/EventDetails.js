import React, {Component } from 'react'
import Calendar from './Calendar'
import Map from './Map'

class EventDetails extends Component {
    state = {
        currEvent:null
    }

    componentDidUpdate() {
        console.log(this.props.events)
        let currEvent = this.props.events.find((event) => {

            return event.id === this.props.match.params.eventID
        })
        this.setState({
            currEvent: currEvent
        })
    }
    
    render() {
        const {currEvent} = this.state

        return (
            <div className='eventDetails'>
                <h1>Event Details</h1>
                 {this.props.events.length < 1 ? <p>Loading...</p> :
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


