import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

// class Movie extends Component{
//
//   static propTypes = {
//     title: PropTypes.string,
//     poster: PropTypes.string
//   };
//
//   render() {
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster}/>
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }

// class MoviePoster extends Component{
//   render(){
//     return(
//       <img src={this.props.poster} width="200" hegiht="200" alt="poster"/>
//     );
//   }
// }

function Movie({title, poster, genres, synopsis}) {
  return(
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, i) => <MovieGenre genre={genre} key={i} />)}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='10'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
}

function MoviePoster({poster, alt}) {
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
  )
}

MoviePoster.propTypes = {
  poster : PropTypes.string.isRequired
}

function MovieGenre({genre}) {
  return(
    <span className="Movie__Genre">{genre}</span>
  )
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Movie;
