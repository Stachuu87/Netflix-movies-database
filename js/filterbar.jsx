import React from "react";
import ReactDOM from "react-dom";

class FilterBar extends React.Component{
    constructor(props){
        super(props);
    }
    
    handleMinRateChange = (e) => {
        if (typeof this.props.handleMinRateChange == "function")  {
            this.props.handleMinRateChange(e);
        }
    }
    
    handleMaxRateChange = (e) => {
        if (typeof this.props.handleMaxRateChange == "function") {
            this.props.handleMaxRateChange(e);
        }
    }
    
    render(){
        return <form className="filterBar">
            <label htmlFor="minRate">Minimum Rate:</label>
            <select name="minRate" value={this.props.minRate} onChange={(e) => {this.handleMinRateChange(e)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <label htmlFor="maxRate">Maximum Rate:</label>
            <select name="maxRate" value={this.props.maxRate} onChange={(e) => {this.handleMaxRateChange(e)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </form>
    }
}

    
module.exports = FilterBar;

