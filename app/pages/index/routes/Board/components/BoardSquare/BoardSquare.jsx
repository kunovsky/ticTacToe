import React, { PropTypes } from 'react';

import AppActionCreator from '../../../../../../actions/AppActionCreator';

export default class BoardSquare extends React.Component {

  static propTypes = {
    model: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this._placeMove = this._placeMove.bind(this);
  }

  _placeMove() {
    if (!this.props.model) {
      AppActionCreator.placeMove(this.props.position);
    }
  }

	render() {
		return (<div onClick={this._placeMove}
                className={`board-square-component columns small-4
                            active-player-${this.props.model}`}>
			{this.props.model}
		</div>);
	}
}
