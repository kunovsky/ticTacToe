import React from 'react';
import { capitalize } from 'lodash';

import AppActionCreator from '../../../../actions/AppActionCreator';
import GameStore from '../../../../stores/GameStore';
import { messages } from '../../../../config/messages';

import BoardSquare from './components/BoardSquare/BoardSquare';

export default class Board extends React.Component {

  constructor(props) {
    super(props);
		this.state = this._getInitialState();
    this._updateBoardState = this._updateBoardState.bind(this);
	}

	componentDidMount() {
		GameStore.addChangeListener(this._updateBoardState);
	}

	componentWillUnmount() {
		GameStore.removeChangeListener(this._updateBoardState);
	}

  _getInitialState() {
    return {
      messages: messages(),
      board: null
    };
  }

  _cms(message) {
    return this.state.messages[`index.board.${message}`];
  }

  _updateBoardState() {
    this.setState({
      board: GameStore.getBoardState(),
      currentPlayer: GameStore.getCurrentPlayerToken(),
      winner: GameStore.checkForWinner()
    });
  }

  _generateBoard() {
    return Object.keys(this.state.board).map(key => {
      return (<BoardSquare key={key}
                           position={key}
                           model={this.state.board[key]} />);
    });
  }

	render() {
    const title = (this.state.winner ? //eslint-disable-line
      this._cms('winner') : this._cms('current')) +
      ` - ${capitalize(this.state.currentPlayer)}`;

		return (<div className="row board-component text-center">
      {!this.state.board ?
        <div className="button begin-game"
             onClick={this._updateBoardState}>
          { this._cms('start') }
        </div>
        :
        <div>
          <div className="current-player-title">
            { title }
          </div>
          {this.state.winner ?
            <div className="columns small-12">
              <div className="button alert reset-game"
                   onClick={() => {AppActionCreator.resetBoard();}}>
                {this._cms('reset')}
              </div>
            </div>
            :
            null
          }
          {this._generateBoard()}
        </div>
      }
		</div>);
	}
}
