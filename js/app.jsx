import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link, IndexRoute, IndexLink, hashHistory, browserHistory} from 'react-router';
import SearchBar from "./searchbar.jsx"; 
import Results from "./results.jsx";

document.addEventListener("DOMContentLoaded", function(){
    
    class App extends React.Component{
        constructor(props){
            super(props);
            this.state={
                answer: [], 
            }
        }
        
        getNames = (data, searchFor) => {           
            let url = "https://netflixroulette.net/api/api.php?" + searchFor + "=" + data;
            fetch(url)
                .then(response => {
                    if(response.ok) { 
                        return response.json()
                    } else {
                        this.setState({
                            answer: [],
                        })
                        throw new Error("error");
                    }
            })
                .then(answer => {
                    this.setState({ 
                        answer: answer,
                    })
            }).catch( err => {
                console.log("Błąd", err);
            })
        }
       
        render(){
            return <div>
                <SearchBar getNames = {this.getNames} />
                <Results list = {this.state.answer}/>
            </div>
        }
    }
    
    ReactDOM.render(
    <App />, document.querySelector(".app")
    )
})