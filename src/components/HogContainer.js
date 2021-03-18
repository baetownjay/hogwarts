import HogCard from './HogCard'
import SingleHogCard from './SingleHogCard'
import React, { Component } from "react";


const HogContainer = ({hogs, changeView}) => {
    // debugger

    const renderSingleHog = (hog) => {
        // debugger
        let pigImage = require(`../hog-imgs/${hog.name.toLowerCase().replaceAll(' ', '_')}.jpg`) 

            // <SingleHogCard hog={hog}/>
            // <HogCard renderSingleHog={renderSingleHog} hog={hog} />
        // <div className="maxPigTile" >
        //     <div className="pigImage" >
        //         <img src={pigImage} />
        //         <div className="card-body">
        //             <h3 className="pigTile h3">{hog.name}</h3>
        //         </div>
        //     </div>
        // </div>
        
    }
    return (
        <div className="container m-3">
            <div className="row justify-content-md-center">
                   {hogs.map(hog => <HogCard changeView={changeView} hog={hog}/>)}
                   {/* {renderSingleHog(hog)} */}
            </div>
        </div>
    )
}

export default HogContainer