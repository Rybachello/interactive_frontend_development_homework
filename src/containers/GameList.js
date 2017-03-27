/**
 * Created by Rybachello on 3/26/2017.
 */
import React from 'react';
import NumberGameApp from '../components/NumberGameApp';
import WordGameApp from '../components/WordGameApp';
const GameList = (props) => {
    const gameElements = props.gameList.map((game, idx) => {
        if (game.type == 'number-game') {
            return (
                <NumberGameApp key={idx}>
                </NumberGameApp>
            );
        } else if (game.type == 'word-game') {
            return (
                <WordGameApp key={idx}>
                </WordGameApp>
            );
        }
    });

    return (
        <div className='game-list'>
            {gameElements}
        </div>
    );
};
GameList.propTypes = {
    gameList: React.PropTypes.arrayOf(React.PropTypes.shape({
        type: React.PropTypes.string,
    })).isRequired
};
export default GameList;
