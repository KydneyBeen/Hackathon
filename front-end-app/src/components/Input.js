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
                    <option value="This Week">This Week</option>
                </select>
            </div>
        )
    }
}

export default Input;