import React from "react";
import ReactDOM from "react-dom";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: "",
            searchFor: "title",
        }
    }
    
    handleTitleChange = (event) => {
        this.setState({
            data: event.target.value,
        })
    }
    handleSelectChange = (event) => {
        this.setState({
            searchFor: event.target.value,
        })
    }

    handleSearchBtnClick = () => {
        if (typeof this.props.getNames == "function") {
            this.props.getNames(this.state.data, this.state.searchFor);
        }
    }
    
    handleEnterPressed = (e) => {
        if (e.key == "Enter") {
            this.handleSearchBtnClick();
        }
    }
    
    goBackToMainPage = () => {
        if(typeof this.props.goBackToMainPage == "function") {
            this.props.goBackToMainPage();
        }
    }
    
    render(){
        return <div>
            <div className="searchBar">
               <div className="logo" onClick={this.goBackToMainPage}></div>
                <input type="text" placeholder="Search..." name="title" onChange={this.handleTitleChange} onKeyPress={this.handleEnterPressed}></input>
                <select onChange={this.handleSelectChange}>
                    <option value="title">title</option>
                    <option value="actor">actor</option>
                    <option value="director">director</option>
                </select>
                <button onClick={this.handleSearchBtnClick}>Search</button>
            </div>
            {this.props.children} 
        </div>
    }
}

    
module.exports = SearchBar;

