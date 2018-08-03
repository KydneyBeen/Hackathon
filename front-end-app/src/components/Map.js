import React, {Component } from 'react'

class Map extends Component {

    
    render() { 


        return (
            <div>
                {!this.props.currEvent.address ? <p>Choose and event to see this map...</p> :
                    <div>
                        <iframe className= 'map-iframe' src={`https://www.google.com/maps/embed/v1/search?q=${this.props.currEvent.address.stNameAndNumber || "Canada"}&key=AIzaSyD6Y-jvO7HIRAAwTKIWiVcAZJf8ywR1MDs`} allowFullScreen title="Google Map"></iframe> 
                    </div>
                }
            </div>
            
        )
    }
}

export default Map