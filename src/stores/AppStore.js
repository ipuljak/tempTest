import AppDispatcher from '../dispatcher/AppDispatcher'
import * as API from '../utils/AppAPI'
import { EventEmitter } from 'events'
import {
  SEARCH_MOVIES
} from '../actions/Types'

const CHANGE_EVENT = 'change'

let _store = {
  movies: [],
  selected: ''
}

class StoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT)
  }

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb)
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb)
  }

  getStore() {
    return _store
  }
}

const Store = new StoreClass()

AppDispatcher.register(payload => {
  const action = payload.action

  switch(action.actionType) {
    default:
      return true
  }
})

export default Store