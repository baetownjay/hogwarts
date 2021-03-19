import React, { Component } from "react";


const HogCard = ({hog, changeView}) => {


    const { name } = hog
    let pigImage = require(`../hog-imgs/${name.toLowerCase().replaceAll(' ', '_')}.jpg`) 
    const hideTile = (e) => {
        // debugger
        e.target.parentElement.style.display = 'none'
    }
    // debugger
    return (
        <div  className="pigTile" onClick={() => changeView('single', name)} >
            <div className="pigImage"  >
                <img src={pigImage} />
                <div className="card-body">
                    <h3 className="pigTile h3">{name}</h3>
                </div>
            </div>
                    <button onClick={(e) => hideTile(e)}>Hide Me</button>
        </div>
    )
}
export default HogCard
// name: 'Babe',
// specialty: 'Being incredibly cute',
// greased: false
// weight: 2.0
// 'highest medal achieved': 'bronze'