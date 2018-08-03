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
                title = {element.title}
                timeDate = {element.time.date}
                timeTime = {element.time.time}
                id = {element.id}
                key = {i}
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