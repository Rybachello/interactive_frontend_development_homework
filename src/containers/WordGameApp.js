import React, {Component} from 'react';
import WordHintList from '../components/WordHintList';
import GuessWordForm from '../components/GuessWordForm';
import WordGame from '../WordGame';
class WordGameApp extends Component {
    constructor(props) {
        super(props);
        this.gameWord = new WordGame();
        this.gameWord.generateWord();
        this.state = {
            hints: []
        };
    }

    onGuessWord(word) {
        let matches = this.gameWord.guess(word);
        this.setState({
            hints: this.state.hints.concat({
                word: word,
                matches: matches,
            })
        });
    }

    render() {
        if (this.gameWord.getIsOverGame() === false) {
            return (
                <div className='number-game'>
                    <h2>Word Guess Game</h2>
                    <GuessWordForm onSubmit={this.onGuessWord.bind(this)}/>
                    <WordHintList hints={this.state.hints}/>
                </div>
            );
        } else {
            return (
                <div className='number-game'>
                    <h2>Word Guess Game</h2>
                    <font size='4'>You win!</font>
                    <WordHintList hints={this.state.hints}/>
                </div>
            );
        }
    }
}

export default WordGameApp;
