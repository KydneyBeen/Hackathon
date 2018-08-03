import React, {Component } from 'react'
import Location from "./Location"
import Input from "./Input"

class Search extends Component {
    state = {
        city: "Vancouver",
        query:"Today"
    }

    getAddress = (city) => {
        this.setState({city})
    }
    getQuery= (query) => {
        this.setState({query})
    }
    sendSearch = () => {
        this.props.filteredEvents(this.state.query, this.state.city)
    }
    render() {
        return (
            <div className ="row searchSection">
                <div className ="col">
                    <Input getQuery={this.getQuery}/>
                </div>
                <div>
                    <i className="material-icons searchSectionIcon" onClick={this.sendSearch}>search</i>
                </div>
                <div className ="col">
                    <Location getAddress={this.getAddress}/>
                </div>
            </div>
        )
    }
}

export default Search