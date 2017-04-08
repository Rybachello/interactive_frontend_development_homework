import React from 'react';
import NumberHint from './NumberHint';
const NumberHintList = (props) => {
    const hintElements = props.moves.map((move, idx) => {
        return (
            <NumberHint guess={move.guess} number={move.number} key={idx}/>
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
            guess: React.PropTypes.string.isRequired,
            number: React.PropTypes.string.isRequired,
        }).isRequired
    )
};
export default NumberHintList;
