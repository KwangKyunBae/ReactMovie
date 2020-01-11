
import './App.css';
import React, { Component } from 'react';
import Movie from './Movie'




class App extends Component {

  state = {
    
  }
  componentDidMount(){
    console.log(fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating'))
  }

  __renderMovies = () =>{
    const movies = this.state.movies.map((movies, index) => {
      return <Movie title={movies.title} poster={movies.poster} key={index}/>
    })
    return movies
  }

  render(){
    return(
      <div className="App">
        {this.state.movies ? this.__renderMovies() : 'Loading'}
        
      </div>
    )
  }
}

export default App;
