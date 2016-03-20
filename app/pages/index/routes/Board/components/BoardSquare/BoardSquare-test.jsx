/* eslint-disable */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import BoardSquare from './BoardSquare';


describe('Components', () => {
  describe('BoardSquare', () => {
    let component;

    beforeEach(() => {
      const element = React.createElement(BoardSquare, {model: 'x', position: '3'});
      component = TestUtils.renderIntoDocument(element);
    });

    it('should render a BoardSquare with an x', () => {
      const result = TestUtils.findRenderedDOMComponentWithClass(component, 'board-square-component');
      expect(result).to.be.defined;
      expect(result.textContent).to.equal('x')
    });
  });
});
