/* eslint-disable */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Header from './Header';


describe('Components', () => {
  describe('Header', () => {
    let component;

    beforeEach(() => {
      const element = React.createElement(Header);
      component = TestUtils.renderIntoDocument(element);
    });

    it('should render a header', () => {
      const result = TestUtils.findRenderedDOMComponentWithClass(component, 'app-header-component');
      expect(result).to.be.defined;
    });

    it('should reveal a special message if you click the title...', () => {
      const result = TestUtils.findRenderedDOMComponentWithClass(component, 'site-title');
      TestUtils.Simulate.click(result);
      expect(result.textContent).to.equal('Mady By Ty Kunovsky');
    });
  });
});
