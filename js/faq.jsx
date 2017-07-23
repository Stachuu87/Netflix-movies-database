import React from "react";
import ReactDOM from "react-dom";

class FAQ extends React.Component{

    render(){
        return <div className="faq">
        <h1>Welcome to Netflix Movies Database</h1>
        <p>Data provided by <a href="https://netflixroulette.net/api/" target="_blank">Netflix Roulette API</a></p>
        </div>
    }
}

    
module.exports = FAQ;

