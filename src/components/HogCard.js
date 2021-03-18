import React, { Component } from "react";


const HogCard = ({hog, changeView}) => {
    // debugger

    const { name, specialty, greased, weight, id } = hog
    let pigImage = require(`../hog-imgs/${name.toLowerCase().replaceAll(' ', '_')}.jpg`) 


    return (
        <div onClick={() => changeView('single', id)} className="pigTile" >
            <div className="pigImage" >
                <img src={pigImage} />
                <div className="card-body">
                    <h3 className="pigTile h3">{name}</h3>
                </div>
            </div>
        </div>
    )
}
export default HogCard
// name: 'Babe',
// specialty: 'Being incredibly cute',
// greased: false
// weight: 2.0
// 'highest medal achieved': 'bronze'