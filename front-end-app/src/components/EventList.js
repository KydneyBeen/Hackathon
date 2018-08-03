import React, {Component } from 'react'
import Event from './Event'

class EventList extends Component {
    state = {
        currEvent: []
    }

    funcCurrEvent = (id) => {
        this.setState ({
            currEvent: this.props.events[id]
        }, () => this.props.updateCurrentState(this.state.currEvent))
    }

    render() {
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
        return(  
            <div className="container">
                <div className = "row justify-content-center">
                    <div className="card-deck">       
                            {eventJSX}
                    </div>
                </div>
            </div>
        )
    }
}

export default EventList