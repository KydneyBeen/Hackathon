import React, {Component } from 'react'
import Event from './Event'

class EventList extends Component {
    render() {
        console.log('EventList log', this.props)
        let eventJSX = this.props.events.map((element, i) =>{
            return <Event 
                title = {element.title}
                address = {element.address}
                time = {element.time}
                key = {i}
                />
        })
        return(  
            <table>
                <tbody>        
                    {eventJSX}
                </tbody>
            </table>
        )
    }
}

export default EventList