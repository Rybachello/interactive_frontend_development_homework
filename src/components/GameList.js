/**
 * Created by Rybachello on 3/26/2017.
 */
import React, {Component} from 'react';
import NumberGameApp from '../containers/NumberGameApp';
const GameList = (props) => {
    const gameElements = props.gameList.map((game, idx) => {
        if (game.type = 'number-game') {
            return (
                <NumberGameApp key={idx}>
                </NumberGameApp>
            );
        }
    });
    // else if (game.type = 'word-game'){
    //         return(
    //
    //         )
    //
    // }
    return (
        <div className='game-list'>
            {gameElements}
        </div>
    );
};

export default GameList;