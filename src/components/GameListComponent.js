import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const GameList = (props) => {
  const gameElements = props.games.map((game) => {
    if (props.location.pathname === '/ongoingGames' &&
        game.status !== 'finished') {
      return (
          <li key={game.id}>
            <Link to={`/games/${game.id}`}>{game.type}, {game.status}</Link>
          </li>
      );
    } else if (props.location.pathname === '/finishedGames' &&
        game.status === 'finished') {
      return (
          <li key={game.id}>
            <Link to={`/games/${game.id}`}>{game.type}, {game.status}</Link>
          </li>
      );
    }
  });

  return (
      <div className='game-list'>
        {gameElements}
      </div>
  );
};
GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    status: PropTypes.string,
    fetchState: PropTypes.object,
    moves: PropTypes.array,
  })),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
export default GameList;
