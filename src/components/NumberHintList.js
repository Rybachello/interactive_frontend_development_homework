import React from 'react';
import NumberHint from './NumberHint';
const NumberHintList = (props) => {
    const hintElements = props.moves.map((move, idx) => {
        return (
            <NumberHint guess={move.guess} number = {move.number} key={idx}/>
        );
    });
    return (
        <div className='number-hint-list'>
            {hintElements}
        </div>
    );
};
export default NumberHintList;
