import React from "react";
import ReactDOM from "react-dom";
 
class Results extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        let list = [];
        if(this.props.list.length > 0) {
            list = this.props.list.map( (elem, index) => {
                return <li key={elem.show_id} className="moviePos">
                        <div className="position">
                       <figure>
                           <img src={elem.poster} />
                       </figure>
                       <figcaption>
                           <h2>{elem.show_title}</h2>
                       </figcaption>
                    </div>
                </li>
            })
        } else if (this.props.list.errorcode) {
            return false;
        } else if (this.props.list.show_id) {
            list = <li className="moviePos">
                    <div className="position">
                       <figure>
                           <img src={this.props.list.poster} />
                       </figure>
                       <figcaption>
                           <h2>{this.props.show_title}</h2>
                       </figcaption>
                    </div>
                </li>
        }
        return <div className="results">            
                    <ul>
                        {list}
                    </ul>
                </div>
    }
}

module.exports = Results;
