import React from 'react';
import NumberGameApp from './NumberGameApp';
import WordGameApp from './WordGameApp';
const GameList = (props) => {
    const gameElements = props.games.map((game, idx) => {
        if (game.type === 'guess_number') {
            return (
                <NumberGameApp game={game} onNumberSubmit={props.onNumberSubmit} key={idx}>
                </NumberGameApp>
            );
        } else if (game.type === 'guess_word') {
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
    games: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.string,
        type: React.PropTypes.string,
        status: React.PropTypes.string,
        fetchState: React.PropTypes.object,
        moves: React.PropTypes.array
    })),
    onNumberSubmit: React.PropTypes.func,
    onWordSubmit: React.PropTypes.func
};
export default GameList;
