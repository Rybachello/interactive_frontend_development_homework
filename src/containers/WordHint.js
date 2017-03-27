/**
 * Created by Rybachello on 3/26/2017.
 */
import React from 'react';
const WordHint = (props) => {
    const letters = props.word.split('').map((x, idx) => {
        return <span key={idx} className={props.matches.indexOf(idx) >= 0 ? "green" : "red"}>{x}</span>;
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
    matches: React.PropTypes.array.isRequired,
    word: React.PropTypes.string,
};
export default WordHint;
