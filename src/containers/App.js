import React, {Component} from 'react';
import GameContainer from '../containers/GameContainer';
import GameCreationContainer from '../containers/GameCreationContainer';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Game Lobby</h1>
                <GameCreationContainer/>
                <GameContainer/>
            </div>
        )
    };
}

export default App;


