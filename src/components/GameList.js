import React from 'react';
import NumberGameApp from '../containers/NumberGameApp';
import WordGameApp from '../containers/WordGameApp';
const GameList = (props) => {
    const gameElements = props.gameList.map((game, idx) => {
        if (game.type === 'number-game') {
            return (
                <NumberGameApp game={game} onNumberSubmit={props.onNumberSubmit} key={idx}>
                </NumberGameApp>
            );
        } else if (game.type === 'word-game') {
            return (
                <WordGameApp game={game} onWordSubmit={props.onWordSubmit} key={idx}>
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
