import React, {Component } from 'react'
import Event from './Event'
import EventDetails from './EventDetails'

class EventList extends Component {
    state = {
        currEvent: []
    }

    funcCurrEvent = (id) => {
        // console.log('funcCurrEvent', this.props.events[id])
        this.setState ({
            currEvent: this.props.events[id]
        })
    }

    render() {
        // console.log('EventList log', this.props)
        let eventJSX = this.props.events.map((element, i) =>{
            return <Event 
                title = {element.title}
                address = {element.address}
                time = {element.time}
                id = {element.id}
                funcCurrEvent = {this.funcCurrEvent}
                key = {i}
                />
        })
        return(  
            <div className='eventList'>
                < table className = 'eventListTable table' >
                    <tbody>        
                        {eventJSX}
                    </tbody>
                </table>
                <EventDetails currEvent = {this.state.currEvent}/>
            </div>
        )
    }
}

export default EventList