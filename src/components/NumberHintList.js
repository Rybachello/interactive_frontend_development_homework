import React from 'react';
import NumberHint from './NumberHint';
const NumberHintList = (props) => {
    const hintElements = props.moves.map((move, idx) => {
        return (
            <NumberHint comparedToAnswer = {move.comparedToAnswer} guess={move.guess} key={idx}/>
        );
    });
    return (
        <div className='number-hint-list'>
            {hintElements}
        </div>
    );
};
NumberHintList.propTypes = {
    moves: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            guess: React.PropTypes.number.isRequired,
            comparedToAnswer: React.PropTypes.string.isRequired,
        }).isRequired
    )
};
export default NumberHintList;
