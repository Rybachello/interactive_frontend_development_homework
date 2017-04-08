import React from 'react';
import GuessNumberForm from '../components/GuessNumberForm';
import NumberHintList from '../components/NumberHintList';

const NumberGameApp = (props) => {
    if (!props.game.isGameOver) {
        return (
            <div className='number-game'>
                <h2>Number Guess Game</h2>
                <GuessNumberForm onSubmit={(number) => props.onNumberSubmit(number, props.game.id)}/>
                <NumberHintList moves={props.game.moves}/>
            </div>
        );
    } else {
        return (
            <div className='number-game'>
                <h2>Number Guess Game</h2>
                <font size='4'>You win</font>
                <NumberHintList moves={props.game.moves}/>
            </div>
        );
    }
};
NumberGameApp.propTypes = {
    game: React.PropTypes.shape({
        type: React.PropTypes.string,
        id: React.PropTypes.number,
        isGameOver: React.PropTypes.bool,
        target: React.PropTypes.number,
        moves: React.PropTypes.array
    }).isRequired,
    onNumberSubmit: React.PropTypes.func.isRequired
};

export default NumberGameApp;

