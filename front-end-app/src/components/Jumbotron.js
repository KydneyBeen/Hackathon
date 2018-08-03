import React, {Component } from 'react'

class NavBar extends Component {

    render() { 
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">STY EVENTS</h1>
                    <p className="lead">Book your next night out with STY</p>
                    
                    <a className='material-icons jumbotronIcon'> location_on  {this.props.homeLocation}</a>

                </div>
            </div>
        )
    }
}

export default NavBar