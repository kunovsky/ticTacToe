import React from 'react';

import { messages } from '../../config/messages';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: messages() };
  }

  _cms(message) {
   return this.state.messages[`footer.${message}`];
  }

  render() {
    return (
      <div className="app-footer-component">
        <div className="row">
          {this._cms('title')}
        </div>
      </div>
    );
  }
}
