import React, {Component } from 'react'

class Map extends Component {

    render() { 
        console.log('map log', this.props.currEvent.address)
        return (
            <div>
            {/* {!this.props.currEventAddr.address.stNameAndNumber ? <p> 'loading .... ' </p> : 
                <div>
                    <iframe className= 'map-iframe' src={`https://www.google.com/maps/embed/v1/search?q=${this.props.currEventAddr}&key=AIzaSyD6Y-jvO7HIRAAwTKIWiVcAZJf8ywR1MDs`} allowFullScreen title="Google Map"></iframe> 
                </div>
            } */}
            </div>
            
        )
    }
}

export default Map