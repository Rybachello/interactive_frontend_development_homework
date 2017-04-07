/**
 * Created by Rybachello on 3/26/2017.
 */
import React, {Component} from 'react';
import GuessNumberForm from '../components/GuessNumberForm';
import NumberHintList from '../components/NumberHintList';

const NumberGameApp = (props) => {
    if (!props.game.isGameOver) {
        return (
            <div className='number-game'>
                <h2>Number Guess Game</h2>
                <GuessNumberForm onSubmit={(number)=>props.onNumberSubmit(number,props.game.id)}/>
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

NumberGameApp.PropTypes = {
  game: React.PropTypes.shape({
      moves: React.PropTypes.array
  })
};


export default NumberGameApp;

// onGuessNumber(number) {
//     let guess = this.gameNumber.guess(number);
//     this.setState({
//         hints: this.state.hints.concat({
//             text: guess,
//             type: this.gameNumber.getIsOverGame() ? 'correct' : 'incorrect',
//         })
//     });
// }