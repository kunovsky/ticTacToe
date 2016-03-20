import { isEmpty } from 'lodash';

function _eachSlice(board, size, callback) {
  for (let i = 0, l = board.length; i < l; i += size) {
    callback.call(this, board.slice(i, i + size));
  }
}

function _convertBoardFromHash(board) {
  const convertedBoard = [];
   _eachSlice(Object.keys(board), 3, (slice) => {
    convertedBoard.push(slice.map(element => {
      return board[element];
    }));
  });
  return convertedBoard;
}

function _checkRow(row) {
  for (let i = 1; i < row.length; i++) {
    if (row[0] !== row[i] || isEmpty(row[i])) {
      return false;
    }
  }
  return true;
}

function _checkRows(board) {
  for (let i = 0; i < board.length; i++) {
    if (_checkRow(board[i])) {
      return true;
    }
  }
  return false;
}

function _checkColumn(i, board) {
  for (let j = 0; j < board[i].length; j++) {
    if (board[j][i] !== board[0][i] || isEmpty(board[j][i])) {
      return false;
    }
  }
  return true;
}

function _checkColumns(board) {
  for (let i = 0; i < board.length; i++) {
    if (_checkColumn(i, board)) {
      return true;
    }
  }
  return false;
}

function _checkRight(board) {
  for (let i = 1; i < board.length; i++) {
    if (board[i][i] !== board[0][0] || isEmpty(board[i][i])) {
      return false;
    }
  }
  return true;
}

function _checkLeft(board) {
  const len = board.length - 1;
  for (let i = 1; i <= len; i++) {
    if (board[i][len - i] !== board[0][len] || isEmpty(board[i][len - i])) {
      return false;
    }
  }
  return true;
}

function _checkDiagonals(board) {
  if (_checkRight(board)) {
    return true;
  }
  else if (_checkLeft(board)) {
    return true;
  }
  else {
    return false;
  }
}

export function checkBoard(board) {
  const convertedBoard = _convertBoardFromHash(board);
  if (_checkRows(convertedBoard) ||
      _checkColumns(convertedBoard) ||
      _checkDiagonals(convertedBoard)) {
    return true;
  }
  else {
    return false;
  }
}

function _isFull(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (isEmpty(board[i][j])) {
        return false;
      }
    }
  }
  return true;
}

export function checkTie(board) {
  if (_isFull(_convertBoardFromHash(board))) {
    return true;
  }
  else {
    return false;
  }
}
