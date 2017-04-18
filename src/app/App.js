import React, { Component } from 'react'

import * as actions from '../actions/AppActions'
import Store from '../stores/AppStore'

import SearchForm from '../components/SearchForm'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="App">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App