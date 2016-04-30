import { EventEmitter } from 'events';
import _ from 'lodash';

import AppDispatcher from '../dispatcher/AppDispatcher';
import { checkBoard, checkTie } from '../utils/checker';

import {
  ON_CHANGE,
} from '../constants/AppConstants';

const actionMappings = {
  PLACE_MOVE: '_placeMove',
  RESET_BOARD: '_resetBoard'
};

class GameStore extends EventEmitter {

  constructor() {
    super();
    this._setInitialState();
  }

  getBoardState() {
    return _.clone(this._board);
  }

  getCurrentPlayerToken() {
    return this._currentPlayerToken;
  }

  checkForWinner() {
    return this._winner;
  }

  emitChange() {
    this.emit(ON_CHANGE);
  }

  addChangeListener(cb) {
    this.on(ON_CHANGE, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(ON_CHANGE, cb);
  }

  _setInitialState() {
    this._board = this._generateInitialBoard();
    this._currentPlayerToken = 'x';
    this._winner = null;
  }

  _generateInitialBoard() {
    return { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' };
  }

  _toggleCurrentPlayerToken() {
    this._currentPlayerToken = this._currentPlayerToken === 'o' ? 'x' : 'o';
  }

  _placeMove(action) {
    this._board[parseInt(action.location, 10)] = this._currentPlayerToken;
    if (checkBoard(this._board)) {
      this._winner = true;
    }
    else if (checkTie(this._board)) {
      this._setInitialState();
    }
    else {
      this._toggleCurrentPlayerToken();
    }
    this.emitChange();
  }

  _resetBoard() {
    this._setInitialState();
    this.emitChange();
  }
}

const store = new GameStore();

AppDispatcher.register((action) => {
  let method = actionMappings[action.actionType];
  store[method].call(store, action);
});

export default store;
