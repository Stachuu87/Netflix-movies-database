import React from "react";
import ReactDOM from "react-dom";
import Error from "./errorpage.jsx";
 
class Results extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let minRating = parseInt(this.props.minRate);
        let maxRating = parseInt(this.props.maxRate);
        let queryResult = [];
        if(this.props.list.length > 0) {
            let counter = 0;
            queryResult = this.props.list.map( (elem, index) => {
                let rate = parseInt(elem.rating.slice(0,1)) + (parseInt(elem.rating.slice(2,3))/10);
                 if(rate >= minRating && rate <= maxRating) {
                     counter ++;
                    return <li key={elem.show_id} className="moviePos">
                            <div className="position">
                           <figure>
                               <img src={elem.poster} />
                           </figure>
                           <figcaption>
                               <h2>{elem.show_title}</h2>
                               <p>Rate: {elem.rating}</p>
                           </figcaption>
                        </div>
                    </li>
                }
            })
            if(counter == 0) {
                queryResult = <Error />
            }

        } else if (this.props.list.show_id) {
            let rate = parseInt(this.props.list.rating.slice(0,1)) + (parseInt(this.props.list.rating.slice(2,3))/10);
           if(rate >= minRating && rate <= maxRating) {
                queryResult = <li className="moviePos">
                        <div className="position">
                           <figure>
                               <img src={this.props.list.poster} />
                           </figure>
                           <figcaption>
                               <h2>{this.props.list.show_title}</h2>
                               <p>Rate: {this.props.list.rating}</p>
                           </figcaption>
                        </div>
                    </li>
            } else {
                queryResult = <Error />
            }
        } else {
            queryResult = <Error />;
        }
        
        
        return <div className="results">            
                    <ul>
                        {queryResult}
                    </ul>
                </div>
    }
}

module.exports = Results;
