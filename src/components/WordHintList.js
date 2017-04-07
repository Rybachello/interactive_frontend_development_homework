import React from 'react';
import WordHint from './WordHint';
const WordHintList = (props) => {
    const hintElements = props.moves.map((move, idx) => {
        return (
            <WordHint word={move.word} matches={move.matches} key={idx}/>
        );
    });
    return (
        <div className='word-hint-list'>
            {hintElements}
        </div>
    );
};
//
// WordHintList.propTypes = {
//     hints: React.PropTypes.arrayOf(React.PropTypes.shape({
//         text: React.PropTypes.string,
//         matches: React.PropTypes.array,
//     })).isRequired
// };
export default WordHintList;
