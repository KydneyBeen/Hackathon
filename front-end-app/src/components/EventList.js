import React, {Component } from 'react'
import Event from './Event'
import EventDetails from './EventDetails'

class EventList extends Component {
    state = {
        currEvent: []
    }

    funcCurrEvent = (id) => {
        console.log('funcCurrEvent', this.props.events[id])
        this.setState ({
            currEvent: this.props.events[id]
        })
    }

    render() {
        console.log('EventList log', this.props)
        let eventJSX = this.props.events.map((element, i) =>{
            return <Event 
                title = {element.name}
                timeDate = {element.dates.start.localDate}
                timeTime = {element.dates.start.localTime}
                id = {i}
                key = {element.id}
                image = {element.images[0].url}
                funcCurrEvent = {this.funcCurrEvent}
                />
        })
        console.log('eventJSX', eventJSX)
        return(  
            <div className='eventList'>
                <div className = 'eventListTable table' >       
                    {eventJSX}
                </div>
                <EventDetails currEvent = {this.state.currEvent}/>
            </div>
        )
    }
}

export default EventList