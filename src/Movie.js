import React,{Component} from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends Component{

    static propType ={
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }



    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
class MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render(){
        return(
            <img src={this.props.poster} alt="Movie Poster"></img>
        )
    }
}

export default Movie;