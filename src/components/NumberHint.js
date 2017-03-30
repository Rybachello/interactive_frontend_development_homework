import React from 'react';
const NumberHint = (props) => {
    return (
        <div className='number-hint'>
            <font size='4' className={props.type == 'correct'?'green':'red'}>
                {props.guess}
            </font>
        </div>
    );
};
NumberHint.propTypes = {
    type: React.PropTypes.string,
    guess: React.PropTypes.string,
};
export default NumberHint;
