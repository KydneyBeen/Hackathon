import React, {Component} from "react";
import axios from "axios";

class Location extends Component {
    state = {
        city:"",
        province:"",
    }

    makeCity = (e) => {
        let selected = e.target.value
        this.props.getAddress(selected)
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
            <div className = "form-group">
                <select onChange={this.makeCity} className = "form-control" >
                    <option value={this.state.city}> This City ({this.state.city}, {this.state.province})</option>
                    <option value="Abbotsford">Abbotsford</option>
                    <option value="Aldergrove">Aldergrove</option>
                    <option value="Burnaby">Burnaby</option>
                    <option value="Coquitlam">Coquitlam</option>
                    <option value="Delta">Delta</option>
                    <option value="Maple Ridge">Maple Ridge</option>
                    <option value="Mission">Mission</option>
                    <option value="North Vancouver">North Vancouver</option>
                    <option value="Port Coquitlam">Port Coquitlam</option>
                    <option value="Port Moody">Port Moody</option>
                    <option value="Richmond">Richmond</option>
                    <option value="Surrey">Surrey</option>
                    <option value="Tsawwassen">Tsawwassen</option>
                    <option value="Vancouver">Vancouver</option>
                    <option value="West Vancouver">West Vancouver</option>
                    <option value="White Rock">White Rock</option>
                </select>
            </div>
        )
    }
}
export default Location