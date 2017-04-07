import React from 'react';
import {EQ, GT, LT} from '../reducers/index';
const NumberHint = (props) => {
    const getResult = () => {
        switch (props.guess) {
            case EQ: {
                return <span className='green'>{props.number}: was correct!</span>;
            }
            case LT: {
                return <span className='red'>{props.number}: was lower than target</span>;
            }
            case GT: {
                return <span className='red'>{props.number}: was greater than target</span>;
            }
        }
    };

    return (
        <div className='number-hint'>
            { getResult() }
        </div>
    );
};
// NumberHint.propTypes = {
//     guess: React.string.isRequired,
//     number: React.string.isRequired,
// };
export default NumberHint;
