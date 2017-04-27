import React from 'react';
import PropTypes from 'prop-types';
const WordHint = (props) => {
  const letters = props.guess.split('').map((x, idx) => {
    return <span key={idx} className={
      props.letterMatches[idx] ? 'green' : 'red'}>{x}</span>;
  });
  return (
      <div className='word-hint'>
        <font size='4'>
          {letters}
        </font>
      </div>
  );
};
WordHint.propTypes = {
  letterMatches: PropTypes.array.isRequired,
  guess: PropTypes.string.isRequired,
};
export default WordHint;
