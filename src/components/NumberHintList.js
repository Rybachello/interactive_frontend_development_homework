import React from 'react';
import NumberHint from './NumberHint';
const NumberHintList = (props) => {
    const hintElements = props.hints.map((hint, idx) => {
        return (
            <NumberHint guess={hint.text} type={hint.type} key={idx}/>
        );
    });
    return (
        <div className='number-hint-list'>
            {hintElements}
        </div>
    );
};

NumberHintList.propTypes = {
    hints: React.PropTypes.arrayOf(React.PropTypes.shape({
        text: React.PropTypes.string,
        type: React.PropTypes.string,
    })).isRequired
};
export default NumberHintList;
