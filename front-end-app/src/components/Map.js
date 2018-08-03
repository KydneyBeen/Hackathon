import React, {Component } from 'react'

class Map extends Component {
    state= {
        address: "455 Granville St"
    }

    render() {        
        return (
            <iframe className= 'map-iframe' src={`https://www.google.com/maps/embed/v1/search?q=${this.state.address}&key=AIzaSyD6Y-jvO7HIRAAwTKIWiVcAZJf8ywR1MDs`} allowFullScreen title="Google Map"></iframe> 
        )
    }
}

export default Map