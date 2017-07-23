import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./searchbar.jsx"; 
import Results from "./results.jsx";
import FAQ from "./faq.jsx";
import FilterBar from "./filterbar.jsx";

document.addEventListener("DOMContentLoaded", function(){
    
    class App extends React.Component{
        constructor(props){
            super(props);
            this.state={
                answer: [], 
                minRate: "1",
                maxRate: "5",
                query: false,
            }
        }
        
        getNames = (data, searchFor) => {           
            let url = "https://netflixroulette.net/api/api.php?" + searchFor + "=" + data;
            fetch(url)
                .then(response => {
                    if(response.ok) { 
                        this.setState({
                            query: true,
                        })
                        return response.json()
                    } else {
                        this.setState({
                            answer: [],
                            query: true,
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
        
        handleMinRateChange = (e) => {
            if (e.target.value <= this.state.maxRate) {
                this.setState({
                    minRate: e.target.value,
                })
            } else {
                alert("Minimum rate can not be higher than maximum rate");
            }
        }

        handleMaxRateChange = (e) => {
            if (e.target.value >= this.state.minRate) {
                this.setState({
                    maxRate: e.target.value,
                })
            } else {
                alert("Maximum rate can not be lower than minimum rate");
            }
        }
        
        goBackToMainPage = () => {
            this.setState({
                query: false,
                answer:[],
            })
        }
       
        render(){
            let content;
            if (this.state.answer.length == 0 && !this.state.query) {
                content = <FAQ />
            } else {
                content = <Results list={this.state.answer} minRate={this.state.minRate} maxRate={this.state.maxRate}/>
            }
            return <div>
                <SearchBar getNames={this.getNames} goBackToMainPage={this.goBackToMainPage} />
                <FilterBar minRate={this.state.minRate} maxRate={this.state.maxRate} handleMinRateChange={this.handleMinRateChange} handleMaxRateChange={this.handleMaxRateChange} />
                {content}
            </div>
		}
}
                  
    ReactDOM.render(
    <App />, document.querySelector(".app")
    )
})