import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  PLACE_MOVE,
  RESET_BOARD
} from '../constants/AppConstants';

export default {
  placeMove(location) {
    AppDispatcher.dispatch({
      actionType: PLACE_MOVE,
      location
    });
  },

  resetBoard() {
    AppDispatcher.dispatch({
      actionType: RESET_BOARD
    });
  }
};
