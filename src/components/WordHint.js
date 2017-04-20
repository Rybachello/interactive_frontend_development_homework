import React from 'react';
const WordHint = (props) => {
    const letters = props.guess.split('').map((x, idx) => {
        return <span key={idx} className= {
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
    letterMatches: React.PropTypes.array.isRequired,
    guess: React.PropTypes.string.isRequired,
};
export default WordHint;
