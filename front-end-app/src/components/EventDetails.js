import React, {Component } from 'react'
import Calendar from './Calendar'
import Map from './Map'

class EventDetails extends Component {

    render() {
        console.log('EventDetails log', this.props.currEvent)
        let {currEvent} = this.props
        
        
       
        return (
            <div className='eventDetails'>
                <h1>Event Details</h1>
                {!this.props.currEvent.images ? <p> 'loading .... ' </p> : 
                <div>
                    <div className='eventDetailsItems'>
                        <h2>{this.props.currEvent.name}</h2>
                        <p>Something Else</p>
                    </div>
                    <img class="d-block w-100" src={this.props.currEvent.images[0].url} alt="Event Image" />
                    <a href={currEvent._embedded.attractions[0].externalLinks.twitter[0].url}  className="fa fa-twitter"></a>
                    <Calendar currEvent={this.props.currEvent}/>
                    <Map currEvent={this.props.currEvent}/>
                </div>
            }
                
            </div>
        )
    }
}

export default EventDetails


