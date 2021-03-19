import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import SingleHogCard from "./SingleHogCard";

class App extends Component {
  state = {
    view: 'all',
    currentName: null,
    pigGif: ''
  }
  changeView = (renderView, name) => {
    // console.log(id)
    this.setState({
      view: renderView,
      currentName: name
    })
  }
  componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=pig&api_key=zbDm4ea54WvOs4XQRzrqMd7DcEA2MDOT')
        .then(r => r.json())
        .then(pigData => {
          // debugger 
          this.setState({
            pigGif: pigData.data[Math.floor(Math.random() * 51)].images.original.url
          })
  })
  }

  renderState = () => {
    if (this.state.view === 'all'){
      return <HogContainer hogs={hogs} changeView={this.changeView} />
    }
    else if (this.state.view === 'single'){
      
      let hog = hogs.find(hog => hog.name === this.state.currentName)
      return <SingleHogCard hog={hog} pigGif={this.state.pigGif}/>
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
