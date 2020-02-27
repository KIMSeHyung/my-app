import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component{

  state = {
  }

  componentDidMount(){
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  }

  _callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=download_count')
    .then(res => res.json())
    .then(ret => ret.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(m => {
      return <Movie
          title={m.title_english}
          poster={m.medium_cover_image}
          key={m.id}
          genres={m.genres}
          synopsis={m.synopsis}
        />
    })
    return movies;
  }

  render(){
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
