import React, {Component} from "react";

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

export default Input;