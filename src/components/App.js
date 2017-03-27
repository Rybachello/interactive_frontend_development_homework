/**
 * Created by Rybachello on 3/26/2017.
 */
import React, {Component} from 'react';
import GameList from '../containers/GameList';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameList: []
        };
    }

    onNewNumberGameClick() {
        const newNumberGame = this.state.gameList.concat({type: 'number-game'});
        this.setState({
            gameList: newNumberGame
        });
    }

    onNewWordGameClick() {
        const newWordGame = this.state.gameList.concat({type: 'word-game'});
        this.setState({
            gameList: newWordGame
        });
    }

    render() {
        return (
            <div>
                <button type="number-game-button" onClick={this.onNewNumberGameClick.bind(this)}>Create new Number
                    game
                </button>
                <button type="word-game-button" onClick={this.onNewWordGameClick.bind(this)}>Create new Word game
                </button>
                <GameList gameList={this.state.gameList}/>
            </div>
        );
    }
}

export default App;


