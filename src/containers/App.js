import React from 'react';
import GameContainer from './GameContainer';
import GameCreationContainer from './GameCreationContainer';
import GameLobbyContainer from './GameLobbyContainer';
import PlayerListContainer from './PlayerListContainer'

const App = () => {
    return (
        <div>
            <GameLobbyContainer/>
            <PlayerListContainer/>
            <GameCreationContainer/>
            <GameContainer/>
        </div>
    );
};

export default App;

