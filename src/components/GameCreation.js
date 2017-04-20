import React, {Component} from 'react';

const GameCreation = (props) => {
    if (props.inFlight) {
        return (
            <div className="input-forms">
                <h2>Loading...</h2>
            </div>
        );
    }
    else {
        return (
            <div>
                <h2>{props.error ? `${props.error}` : ``}</h2>
                <button className="number-game-button" type="number-game"
                        onClick={() => props.createGame('guess_number')}>Create new Number game
                </button>
                <button className="word-game-button" type="word-game"
                        onClick={() => props.createGame('guess_word')}>Create new Word game
                </button>
            </div>
        )
    }
};

GameCreation.propTypes = {
    createGame: React.PropTypes.func.isRequired,
    inFlight: React.PropTypes.bool.isRequired,
    error: React.PropTypes.string
};
export default GameCreation;
