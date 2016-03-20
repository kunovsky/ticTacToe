/* eslint-disable max-len */

import { expect } from 'chai';
import { checkBoard, checkTie } from './checker';

describe('checker', () => {
  describe('checkBoard', () => {
    it('should return false if neither player has an entire row, column, or diagonal of marks', () => {
      const tieGame = { 0: 'x', 1: 'o', 2: 'x', 3: 'o', 4: 'x', 5: 'o', 6: 'o', 7: 'x', 8: 'o' };
      const parsedBoard = checkBoard(tieGame);
      expect(parsedBoard).to.equal(false);
    });

    it('should return true if a player has a row of marks', () => {
      const rowWinner = { 0: 'x', 1: 'x', 2: 'x', 3: 'o', 4: 'x', 5: 'o', 6: 'o', 7: 'x', 8: 'o' };
      const parsedBoard = checkBoard(rowWinner);
      expect(parsedBoard).to.equal(true);
    });

    it('should return true if a player has a column of marks', () => {
      const columnWinner = { 0: 'x', 1: 'o', 2: 'o', 3: 'x', 4: 'o', 5: 'x', 6: 'x', 7: 'x', 8: 'o' };
      const parsedBoard = checkBoard(columnWinner);
      expect(parsedBoard).to.equal(true);
    });

    it('should return true if a player has a right diagonal win (i.e.[[0,0],[1,1],[2,2]])', () => {
      const rightDiagonal = { 0: 'x', 1: 'o', 2: 'o', 3: 'o', 4: 'x', 5: 'o', 6: 'x', 7: 'o', 8: 'x' };
      const parsedBoard = checkBoard(rightDiagonal);
      expect(parsedBoard).to.equal(true);
    });

    it('should return true if a player has a left diagonal win (i.e.[[0,2],[1,1],[2,0]])', () => {
      const leftDiagonal = { 0: 'o', 1: 'o', 2: 'x', 3: 'o', 4: 'x', 5: 'o', 6: 'x', 7: 'o', 8: 'x' };
      const parsedBoard = checkBoard(leftDiagonal);
      expect(parsedBoard).to.equal(true);
    });
  });

  describe('checkTie', () => {
    it('should return true if the board is a tie', () => {
      const tieBoard = { 0: 'o', 1: 'x', 2: 'o', 3: 'x', 4: 'o', 5: 'x', 6: 'x', 7: 'o', 8: 'x' };
      const parsedBoard = checkTie(tieBoard);
      expect(parsedBoard).to.equal(true);
    });

    it('should return false if the board is not a tie', () => {
      const incompleteBoard = { 0: '', 1: 'x', 2: '', 3: 'o', 4: 'x', 5: 'o', 6: '', 7: '', 8: '' };
      const parsedBoard = checkTie(incompleteBoard);
      expect(parsedBoard).to.equal(false);
    });
  });
});
