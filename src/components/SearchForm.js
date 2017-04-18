import React, { Component } from 'react'
import {searchMovies} from '../actions/AppActions'

class SearchForm extends Component {
  onSubmit(event) {
    event.preventDefault()
    let movie = {
      title: this.refs.title.value.trim()
    }
    searchMovies(movie)

  }

  render() {
    return (
      <div className="search-form">
        <h1 className="text-center">Search For A Movie</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref="title"
              placeholder="Enter a movie title.." />
          </div>
          <button className="btn btn-primary btn-block">Search Movies</button>
        </form>
      </div>
    )
  }
}

export default SearchForm