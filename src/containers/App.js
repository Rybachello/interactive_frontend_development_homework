import React from 'react';

import GamesContainer from './GamesContainer';
import GameContainer from './GameContainer';
import GameCreationContainer from './GameCreationContainer';
import GameLobbyContainer from './GameLobbyContainer';
import PlayerListContainer from './PlayerListContainer';
import MainMenuContainer from './MainMenuContainer';
import {
  Route,
} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

const App = ({history}) => {
  return (
      <ConnectedRouter history={history}>
        <div>
          <MainMenuContainer/>
          <GameLobbyContainer/>
          <Route path="/createGame" component={GameCreationContainer}/>
          <Route path="/players" component={PlayerListContainer}/>
          <Route path="/ongoingGames" component={GamesContainer}/>
          <Route path="/finishedGames" component={GamesContainer}/>
          <Route path="/games/:gameId" component={GameContainer}/>
        </div>
      </ConnectedRouter>
  );
};
App.propTypes = {
  history: React.PropTypes.object.isRequired,
};

export default App;

