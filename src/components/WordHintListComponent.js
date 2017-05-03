import React from 'react';
import WordHint from './WordHintComponent';
import PropTypes from 'prop-types';
const WordHintList = (props) => {
  const hintElements = props.moves.map((move, idx) => {
    return (
        <WordHint guess={move.guess} letterMatches={move.letterMatches}
                  key={idx}/>
    );
  });
  return (
      <div className='word-hint-list'>
        {hintElements}
      </div>
  );
};
WordHintList.propTypes = {
  moves: PropTypes.arrayOf(PropTypes.shape({
    guess: PropTypes.string.isRequired,
    letterMatches: PropTypes.array.isRequired,
  })).isRequired,
};
export default WordHintList;
