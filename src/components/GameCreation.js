import React, {Component} from 'react';

class GameCreation extends Component {
    render() {
        return (
            <div>
                <button className="number-game-button" type="number-game"
                        onClick={()=>this.props.CreateGame('number-game')}>Create new Number game
                </button>
                <button className="word-game-button" type="word-game"
                        onClick={()=>this.props.CreateGame('word-game')}>Create new Word game
                </button>
            </div>
        );
    }
}

export default GameCreation;
