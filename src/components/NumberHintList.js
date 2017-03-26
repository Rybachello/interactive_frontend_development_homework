/**
 * Created by Rybachello on 3/26/2017.
 */
import React, {Component} from 'react';
import NumberHint from '../components/NumberHint';
const HintList = (props) => {
    const hintElements = props.hints.map((hint, idx) => {
        return (
            <NumberHint guess={hint.text} type={hint.type} key={idx}/>
        );
    });
    return (
        <div className='hint-list'>
            {hintElements}
        </div>
    );
};

HintList.propTypes = {
    hints: React.PropTypes.arrayOf(React.PropTypes.shape({
        guess: React.PropTypes.string,
    })).isRequired
};
export default HintList;