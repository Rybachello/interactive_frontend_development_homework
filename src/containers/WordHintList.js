/**
 * Created by Rybachello on 3/26/2017.
 */
import React from 'react';
import WordHint from './WordHint';
const WordHintList = (props) => {
    const hintElements = props.hints.map((hint, idx) => {
        return (
            <WordHint word={hint.word} matches={hint.matches} key={idx}/>
        );
    });
    return (
        <div className='word-hint-list'>
            {hintElements}
        </div>
    );
};

WordHintList.propTypes = {
    word:React.PropTypes.string,
    matches :React.PropTypes.array,
};
export default WordHintList;
