import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import LoggingComponent from '../components/LoggingComponent';

const GameLobby = (props) => {
  console.log(props);
  return (
    <div>
      <Header text='Game Lobby'/>
      <LoggingComponent connection={props.connection}
                      onConnectClick = {props.onConnectClick}
                      onDisconnectClick = {props.onDisconnectClick}/>
    </div>
  );
};

GameLobby.propTypes= {
  connection: PropTypes.shape({
    disconnectReason: PropTypes.string,
    playerId:PropTypes.string,
    players: PropTypes.array,
    status: PropTypes.string.isRequired
  }),
  onConnectClick: PropTypes.func.isRequired,
  onDisconnectClick: PropTypes.func.isRequired
};

export default GameLobby;

