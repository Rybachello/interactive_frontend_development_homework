import React from 'react';
import WordHintList from '../components/WordHintList';
import GuessWordForm from '../components/GuessWordForm';
const WordGameApp = (props) => {
    console.log(props);
    if (props.game.status === 'waiting_for_move') {
        return (
            <div className='guess_word'>
                <h2>Word Guess Game</h2>
                <GuessWordForm inFlight = {props.game.inFlight} onSubmit={(word) => props.onWordSubmit(word, props.game.id)}/>
                <WordHintList moves={props.game.move}/>
            </div>
        );
    }
    if (props.game.status === 'finished') {
        return (
            <div className='guess_word'>
                <h2>Word Guess Game</h2>
                <font size='4'>You win!</font>
                <WordHintList moves={props.game.move}/>
            </div>
        );
    }
};
WordGameApp.propTypes = {
    game: React.PropTypes.shape({
        type: React.PropTypes.string,
        id: React.PropTypes.string,
        moves: React.PropTypes.array
    }).isRequired,
    onWordSubmit: React.PropTypes.func.isRequired
};

export default WordGameApp;
