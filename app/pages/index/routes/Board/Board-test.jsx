/* eslint-disable */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import Board from './Board';
import BoardSquare from './components/BoardSquare/BoardSquare';

import GameStore from '../../../../stores/GameStore';

describe('Components', () => {
  describe('Board', () => {
    let component;

    beforeEach(() => {
      const element = React.createElement(Board);
      component = TestUtils.renderIntoDocument(element);
    });

    it('should render a Board', () => {
      const result = TestUtils.findRenderedDOMComponentWithClass(component, 'board-component');
      expect(result).to.be.defined;
    });

    it('should start a new game if a user clicks the start new game button', () => {
      const startButton = TestUtils.findRenderedDOMComponentWithClass(component, 'begin-game');
      TestUtils.Simulate.click(startButton);
      const boardSquares = TestUtils.scryRenderedComponentsWithType(component, BoardSquare);
      expect(boardSquares.length).to.equal(9);
    });

    it('should render a series of board squares based on a board', () => {
      sinon.stub(GameStore, 'getBoardState', () => {
        return { 0: 'x', 1: 'o', 2: 'o', 3: 'o', 4: 'x', 5: 'o', 6: 'x', 7: 'o', 8: 'x' };
      });
      const startButton = TestUtils.findRenderedDOMComponentWithClass(component, 'begin-game');
      TestUtils.Simulate.click(startButton);
      const board = TestUtils.scryRenderedComponentsWithType(component, BoardSquare);
      expect(board[0].props.model).to.equal('x');
      expect(board[1].props.model).to.equal('o');
      expect(board[2].props.model).to.equal('o');
      expect(board[3].props.model).to.equal('o');
      expect(board[4].props.model).to.equal('x');
      expect(board[5].props.model).to.equal('o');
      expect(board[6].props.model).to.equal('x');
      expect(board[7].props.model).to.equal('o');
      expect(board[8].props.model).to.equal('x');
    });

    it('should show a reset button that resets the game if the game has been won', () => {
      sinon.stub(GameStore, 'checkForWinner', () => { return true;});
      const startButton = TestUtils.findRenderedDOMComponentWithClass(component, 'begin-game');
      TestUtils.Simulate.click(startButton);
      const currentPlayerTitle = TestUtils.findRenderedDOMComponentWithClass(component, 'current-player-title');
      expect(currentPlayerTitle.textContent).to.equal('Winner - X');
      const resetButton = TestUtils.findRenderedDOMComponentWithClass(component, 'reset-game');
      GameStore.checkForWinner.restore();
      TestUtils.Simulate.click(resetButton);
      expect(currentPlayerTitle.textContent).to.equal('Current Player To Move - X');
    });
  });
});
