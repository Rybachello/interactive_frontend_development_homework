import React from 'react';
import WordHint from './WordHint';
const WordHintList = (props) => {
    const hintElements = props.moves.map((move, idx) => {
        return (
            <WordHint guess={move.guess} letterMatches={move.letterMatches} key={idx}/>
        );
    });
    return (
        <div className='word-hint-list'>
            {hintElements}
        </div>
    );
};
WordHintList.propTypes = {
    moves: React.PropTypes.arrayOf(React.PropTypes.shape({
        guess: React.PropTypes.string.isRequired,
        letterMatches: React.PropTypes.array.isRequired,
    })).isRequired
};
export default WordHintList;
