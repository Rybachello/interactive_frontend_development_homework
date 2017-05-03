import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MenuHeader = (props) => {
  if (props.status === 'connected') {
    return (
        <div className='app-header'>
          <ul>
            <li><Link to="/createGame">Create Game</Link></li>
            <li><Link to="/players">Online Players</Link></li>
            <li><Link to="/ongoingGames">Ongoing games</Link></li>
            <li><Link to="/finishedGames">Finished games</Link></li>
          </ul>
        </div>
    );
  }
  return (
      <div/>
  );
};
MenuHeader.propTypes = {
  status: PropTypes.string.isRequired,
};
export default MenuHeader;

