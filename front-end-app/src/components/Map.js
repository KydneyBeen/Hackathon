import React, {Component } from 'react'
import axios from "axios"

class Map extends Component {
    state= {
        address: "455 Granville St"
    }

    render() {        
        return (
             <div >
                <iframe className= 'map-iframe' src={`https://www.google.com/maps/embed/v1/search?q=${this.state.address}&key=AIzaSyD6Y-jvO7HIRAAwTKIWiVcAZJf8ywR1MDs`} allowFullScreen title="Google Map"></iframe> 
            </div>
        )
    }
}

export default Map