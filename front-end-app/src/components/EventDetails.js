import React, {Component } from 'react'
import Calendar from './Calendar'
import Map from './Map'
import axios from "axios"

class EventDetails extends Component {
    state = {
        currEvent:null,
        events:null
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/${this.props.location}/${this.props.search}`)
        .then ((res) => {
            this.setState({events:res.data})
        })
        .then(() => {
            let currEvents = this.state.currEvent.find((event) => {
                return event.id === this.props.match.params
            })
            this.setState({currEvents})
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


