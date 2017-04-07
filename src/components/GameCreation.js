import React, {Component} from 'react';

class GameCreation extends Component {
    render() {
        return (
            <div>
                <button className="number-game-button" type="number-game"
                        onClick={() => this.props.createGame('number-game')}>Create new Number game
                </button>
                <button className="word-game-button" type="word-game"
                        onClick={() => this.props.createGame('word-game')}>Create new Word game
                </button>
            </div>
        );
    }
}
GameCreation.propTypes = {
    createGame: React.PropTypes.func.isRequired
};
export default GameCreation;
