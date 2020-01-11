
import './App.css';
import React, { Component } from 'react';
import Movie from './Movie'




class App extends Component {

  state = {
    
  }
  componentDidMount(){
    this.__getMovies();
  }

  __renderMovies = () =>{
    const movies = this.state.movies.map((movie, index) => {
      return <Movie 
      title={movie.title_english} 
      poster={movie.small_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
    })
    return movies
  }
  // async는 순서와 상관없이 작업이 진행된다.
  // await은 cappApi가 끝나길 기다리는것
  // setState는 call api가 끝나기전까지 실행안된다.
  __getMovies = async () =>{
    const movies = await this.__callApi()
    this.setState({
      movies
    })
  }

  __callApi = () =>{
     return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
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
