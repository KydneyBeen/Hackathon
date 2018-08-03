import React, {Component } from 'react'

class NavBar extends Component {

    render() { 
        console.log('location', this.props)
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">STYle EVENTS</h1>
                    <p className="lead">Book your next night out with STYle</p>
                    <button className="jumbotronContainer">
                        <i className = "material-icons jumbotronIcon" >location_on </i>
                        <a className= "jumbotronLocation">  {this.props.homeLocation}</a>
                    </button>
                </div>
            </div>
        )
    }
}

export default NavBar