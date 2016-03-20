import React from 'react';

import { messages } from '../../config/messages';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { messages: messages() };
    this._toggleTitle = this._toggleTitle.bind(this);
  }

  _cms(message) {
   return this.state.messages[`header.${message}`];
  }

  _toggleTitle() {
    this.setState({
      showCreator: !this.state.showCreator
    });
  }

  render() {
    return (<div className="app-header-component">
      <div className="row text-center">
        <h3 className="site-title"
            onClick={this._toggleTitle}>
          {this.state.showCreator ?
            this._cms('made_by')
          :
            this._cms('title')}
        </h3>
      </div>
    </div>);
  }
}
