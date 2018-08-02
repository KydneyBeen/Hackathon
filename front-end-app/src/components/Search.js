import React, {Component } from 'react'
import axios from "axios"

class Search extends Component {
    state = {
        query:null
    }

    getAddress = (city) => {
        this.props.filteredEvents(this.state.query, city)
    }
    getQuery= (query) => {
        this.setState({query})
    }
    render() {
        return (
            <div className ="row">
                <div className ="col">
                    <Input getQuery={this.getQuery}/>
                </div>
                <div className ="col">
                    <Location getAddress={this.getAddress}/>
                </div>
            </div>
        )
    }
}

class Input extends Component {

    makeQuery = (e) => {
        let selected = e.target.value;
        this.props.getQuery(selected)
    }
    render() {
        return (
            <div className="form-group">
                <select onChange={this.makeQuery} className="form-control">
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="Week">7 Days</option>
                </select>
            </div>
        )
    }
}

class Location extends Component {
    state = {
        city:"",
        province:"",
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((pos) => {
            let latlng = pos.coords.latitude + "," + pos.coords.longitude
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=AIzaSyBeBWzf10BUjCAqbTY3qbjDdPjHOCTx_eM`)
                .then((res) => {
                let city = res.data.results[0].address_components[3].long_name
                let province = res.data.results[0].address_components[5].short_name
                this.setState({
                    city,
                    province,
                })
            })
        })
    }
    render() {
        
        return (
            <div>
            {this.state.city}, {this.state.province}
            </div>
        )
    }
}

export default Search