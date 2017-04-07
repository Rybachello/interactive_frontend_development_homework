import React from 'react';
import GameContainer from '../containers/GameContainer';
import GameCreationContainer from '../containers/GameCreationContainer';

const App = () => {
    return (
        <div>
            <h1>Game Lobby</h1>
            <GameCreationContainer/>
            <GameContainer/>
        </div>
    );
};

export default App;

