import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Game from '../src/Game';
/* create instance of new game */
const game = new Game();
game.generateNumber(0, 9);

class GuessForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: ''
        };
    }

    handleNumberChange(event) {
        if (!isNaN(event.target.value)) {
            this.setState({number: event.target.value});
        }
    }

    handleEnter(event) {
        if (event.keyCode === 13) {
            if (this.state.number && this.state.number.length == 1) {
                this.props.onSubmit(this.state.number);
                this.setState({number: ''});
            }
        }
    }

    render() {
        return (
            <div className='guess-form'>
                <font size='4'>Guess a number from 0 to 9</font>
                <br/>
                <br/>
                <input type='text'
                       value={this.state.number}
                       onChange={this.handleNumberChange.bind(this)}
                       onKeyUp={this.handleEnter.bind(this)}
                />
            </div>
        );
    }
}
GuessForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
};

const Hint = (props) => {
    return (
        <div className='hint'>
            <font size='4' className={props.type == 'correct'?'green':'red'}>
                {props.guess}
            </font>
        </div>
    );
};
Hint.propTypes = {
    type: React.PropTypes.string,
    guess: React.PropTypes.string,
};

const HintList = (props) => {
    const hintElements = props.hints.map((hint, idx) => {
        return (
            <Hint guess={hint.text} type={hint.type} key={idx}/>
        );
    });
    return (
        <div className='hint-list'>
            {hintElements}
        </div>
    );
};

HintList.propTypes = {
    hints: React.PropTypes.arrayOf(React.PropTypes.shape({
        guess: React.PropTypes.string,
    })).isRequired
};
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hints: []
        };
    }

    onGuess(number) {
        let guess = game.guess(number);
        this.setState({
            hints: this.state.hints.concat({
                text: guess,
                type: game.getIsOverGame() ? 'correct' : 'incorrect',
            })
        });
    }

    render() {
        if (game.getIsOverGame() === false) {
            return (
                <div className='app'>
                    <h1>Game Lobby</h1>
                    <h2>Number Guess Game</h2>
                    <GuessForm onSubmit={this.onGuess.bind(this)}/>
                    <HintList hints={this.state.hints}/>
                </div>
            );
        } else {
            return (
                <div className='app'>
                    <h1>Game Lobby</h1>
                    <h2>Number Guess Game</h2>
                    <font size='4'>You win</font>
                    <HintList hints={this.state.hints}/>
                </div>
            );
        }
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
