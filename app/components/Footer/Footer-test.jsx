/* eslint-disable */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Footer from './Footer';


describe('Components', () => {
  describe('Footer', () => {
    let component;

    beforeEach(() => {
      const element = React.createElement(Footer);
      component = TestUtils.renderIntoDocument(element);
    });

    it('should render a footer', () => {
      const result = TestUtils.findRenderedDOMComponentWithClass(component, 'app-footer-component');
      expect(result).to.be.defined;
    });
  });
});
