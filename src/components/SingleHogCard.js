import React, { Component } from "react";


const SingleHogCard = ({hog, pigGif}) => {
    // debugger

    const { name, specialty, greased, weight, "highest medal achieved": medal } = hog
    // const { url } = pigGif
    let pigImage = require(`../hog-imgs/${name.toLowerCase().replaceAll(' ', '_')}.jpg`) 
    // debugger
    return (

        <div className="maxPigTile" >
            <div className="pigImage" >
                <img src={pigImage} />
                <div className="card-body">
                    <h3 className="pigTile h3">{name}</h3>
                    <ul className='normalText'>
                        <li className='hoggyText'>{specialty}</li>
                        <li className='hoggyText'>{weight}</li>
                        <li className='achievementText'>Highest Medal Achieved: {medal}</li>
                        <li className='hoggyText'>{greased ? "I'm Greased!" : "Not Greased Yet."}</li>
                        <li><img src={pigGif} /></li>    
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default SingleHogCard
// name: 'Porkchop',
// specialty: 'Making friends',
// greased: true,
// weight: 1.6,
// 'highest medal achieved': 'silver'