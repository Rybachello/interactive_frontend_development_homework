import React from 'react';
import GameContainer from './GameContainer';
import GameCreationContainer from './GameCreationContainer'
import GameHeader from '../components/GameHeader'

const App = () => {
    return (
        <div>
            <GameHeader/>
            <GameCreationContainer/>
            <GameContainer/>
        </div>
    );
};

export default App;

