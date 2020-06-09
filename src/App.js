import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import JsContainer from "./containers/jsContainer";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Welcome to the world of Javascript</h1>
        <JsContainer />
      </div>
    );
  }
}

export default hot(module)(App);