import React from 'react';
import Header from './HeaderComponent';
import PropTypes from 'prop-types';
const PlayerList = (props) => {
  if (props.status !== 'connected') {
    return (
        <div/>
    );
  }
  const players = props.players.map((player, idx) => {
    return <p key={idx}>{player.id === props.playerId
        ? player.name + '(you)'
        : player.name }</p>;
  });
  return (
      <div className='player-list'>
        <Header text='Online Players'/>
        {players}
      </div>
  );
};
PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
      }),
  ),
  playerId: PropTypes.string,
  status: PropTypes.string,

};
export default PlayerList;
