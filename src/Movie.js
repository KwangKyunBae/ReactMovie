import React,{Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster/>
                <h1>hello this is a movie</h1>
            </div>
        )
    }
}
class MoviePoster extends Component{
    render(){
        return(
            <img src="https://m.media-amazon.com/images/M/MV5BMTAyMjQ3OTAxMzNeQTJeQWpwZ15BbWU4MDU0NzA1MzAx._V1_SY278_CR2,0,184,278_.jpg"></img>
        )
    }
}

export default Movie;