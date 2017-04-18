import AppDispatcher from '../dispatcher/AppDispatcher'

import {
  SEARCH_MOVIES
} from './Types'

export const searchMovies = movie => {
  AppDispatcher.handleViewAction({
    actionType: SEARCH_MOVIES,
    movie: movie
  })
}