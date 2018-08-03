import React, {Component } from 'react'

class NavBar extends Component {

    render() { 
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">STY EVENTSn</h1>
                    <p className="lead">Book your next night out with STY</p>
                    <a className='btn btn-primary eventBtn'>Upcoming Events</a>
                </div>
            </div>
        )
    }
}

export default NavBar