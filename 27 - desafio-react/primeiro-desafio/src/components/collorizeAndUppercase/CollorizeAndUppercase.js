import React from "react";
import './CollorizeAndUppercase.css'

function CollorizeAndUppercase({title, color}) {
    return(
        <div>
            <h1 className="titulo" style={{color: color}}>{title}</h1>
        </div>
    )
}

CollorizeAndUppercase.defaultProps = {
    color: 'orange'
}

export default CollorizeAndUppercase