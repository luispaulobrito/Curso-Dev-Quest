import React from "react";
import './card.css'

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <h3>{this.props.title}</h3>
                <p>Esse é o texto do card</p>
            </div>
        )
    }
}

export default Card