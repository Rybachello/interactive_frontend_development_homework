import React from 'react';
import NumberHint from './NumberHintComponent';
import PropTypes from 'prop-types';
const NumberHintList = (props) => {
  const hintElements = props.moves.map((move, idx) => {
    return (
        <NumberHint comparedToAnswer={move.comparedToAnswer} guess={move.guess}
                    key={idx}/>
    );
  });
  return (
      <div className='number-hint-list'>
        {hintElements}
      </div>
  );
};
NumberHintList.propTypes = {
  moves: PropTypes.arrayOf(
      PropTypes.shape({
        guess: PropTypes.number.isRequired,
        comparedToAnswer: PropTypes.string.isRequired,
      }).isRequired,
  ),
};
export default NumberHintList;
