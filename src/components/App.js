import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import SingleHogCard from "./SingleHogCard";

class App extends Component {
  state = {
    view: 'all',
    currentId: null
  }
  changeView = (renderView, id) => {
    this.setState({
      view: renderView,
      currentId: id
    })
  }
  renderState = () => {
    if (this.state.view === 'all'){
      return <HogContainer hogs={hogs} changeView={this.changeView} />
    }
    else if (this.state.view === 'single'){
      
      let hog = hogs.find(hog => hog.id === this.state.currentId)
      return <SingleHogCard hog={hog} />
    }
    else if (this.state.view === 'greased'){
      let greasedHogs = hogs.filter(hog => hog.greased === true)
      return <HogContainer hogs={greasedHogs} changeView={this.changeView} />
    }
    else if (this.state.view === 'sortedAlpha'){
      let sortedHogs = hogs.sort(function (a, b) {
        if (a.name < b.name){
          return -1;
        }
        if (a.name > b.name){
          return 1;
        }
        return 0;
      })
      return <HogContainer hogs={sortedHogs} changeView={this.changeView} />
    }
  
      else if (this.state.view === 'sortedWeight'){
        let sortedHogsWeight = hogs.sort(function (a, b) {
          if (a.weight < b.weight){
            return -1;
          }
          if (a.weight > b.weight){
            return 1;
          }
          return 0;
        })
        return <HogContainer hogs={sortedHogsWeight} changeView={this.changeView} />
    }
  }
  
  render() {
    return (
      <div className="App">
        <Nav />
        <button onClick={() => {this.state.view === 'greased' ? this.changeView('all') : this.changeView('greased') }}>Toggle Greased</button>
        <button onClick={() => this.changeView('sortedAlpha')}>Sort by Name</button>
        <button onClick={() => this.changeView('sortedWeight')}>Sort by Weight</button>
        {this.renderState()}
        {/* <HogContainer hogs={hogs} /> */}
      </div>
    );
  }
}

export default App;
