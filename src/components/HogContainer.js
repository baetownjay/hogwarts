import HogCard from './HogCard'
import SingleHogCard from './SingleHogCard'
import React, { Component } from "react";


const HogContainer = ({hogs, changeView}) => {
    // debugger


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