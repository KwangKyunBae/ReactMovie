
import './App.css';
import React, { Component } from 'react';
import Movie from './Movie'
class App extends Component {
  render(){
    return(
      <div className="App">
        <Movie/>
        <Movie/>
        <Movie/>
      </div>
    )
  }
}

export default App;
