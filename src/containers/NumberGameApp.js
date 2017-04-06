/**
 * Created by Rybachello on 3/26/2017.
 */
import React, {Component} from 'react';
import NumberGame from '../NumberGame';
import GuessNumberForm from '../components/GuessNumberForm';
import NumberHintList from '../components/NumberHintList';
class NumberGameApp extends Component {
    constructor(props) {
        super(props);
        this.gameNumber = new NumberGame();
        this.gameNumber.generateNumber(0, 9);
        this.state = {
            hints: []
        };
    }

    onGuessNumber(number) {
        let guess = this.gameNumber.guess(number);
        this.setState({
            hints: this.state.hints.concat({
                text: guess,
                type: this.gameNumber.getIsOverGame() ? 'correct' : 'incorrect',
            })
        });
    }

    render() {
        if (this.gameNumber.getIsOverGame() === false) {
            return (
                <div className='number-game'>
                    <h2>Number Guess Game</h2>
                    <GuessNumberForm onSubmit={this.onGuessNumber.bind(this)}/>
                    <NumberHintList hints={this.state.hints}/>
                </div>
            );
        } else {
            return (
                <div className='number-game'>
                    <h2>Number Guess Game</h2>
                    <font size='4'>You win</font>
                    <NumberHintList hints={this.state.hints}/>
                </div>
            );
        }
    }
}

export default NumberGameApp;
