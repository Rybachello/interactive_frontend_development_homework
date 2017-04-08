import React from 'react';
import WordHintList from '../components/WordHintList';
import GuessWordForm from '../components/GuessWordForm';
const WordGameApp = (props) => {
    if (!props.game.isGameOver) {
        return (
            <div className='number-game'>
                <h2>Word Guess Game</h2>
                <GuessWordForm onSubmit={(word) => props.onWordSubmit(word, props.game.id)}/>
                <WordHintList moves={props.game.moves}/>
            </div>
        );
    } else {
        return (
            <div className='number-game'>
                <h2>Word Guess Game</h2>
                <font size='4'>You win!</font>
                <WordHintList moves={props.game.moves}/>
            </div>
        );
    }
};
WordGameApp.propTypes = {
    game: React.PropTypes.shape({
        type: React.PropTypes.string,
        id: React.PropTypes.number,
        isGameOver: React.PropTypes.bool,
        target: React.PropTypes.string,
        moves: React.PropTypes.array
    }).isRequired,
    onWordSubmit: React.PropTypes.func.isRequired
};

export default WordGameApp;
