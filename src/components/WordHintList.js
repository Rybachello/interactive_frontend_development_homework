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
// WordHintList.propTypes = {
//     moves: React.PropTypes.arrayOf(React.PropTypes.shape({
//         word: React.PropTypes.string.isRequired,
//         matches: React.PropTypes.array.isRequired,
//     })).isRequired
// };
export default WordHintList;
