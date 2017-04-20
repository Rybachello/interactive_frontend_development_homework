import React from 'react';
import WordHintList from './WordHintList';
import GuessWordForm from './GuessWordForm';
const WordGameApp = (props) => {
    if (props.game.status === 'waiting_for_move') {
        return (
            <div className='guess_word'>
                <h2>Word Guess Game</h2>
                <GuessWordForm fetchState={props.game.fetchState}
                               onSubmit={(word) => props.onWordSubmit(word, props.game.id)}/>
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
        id: React.PropTypes.string,
        type: React.PropTypes.string,
        move: React.PropTypes.array,
        fetchState: React.PropTypes.shape({
            inFlight: React.PropTypes.bool,
            error: React.PropTypes.shape,
        }),
        status: React.PropTypes.string
    }),
    onWordSubmit: React.PropTypes.func
};

export default WordGameApp;
