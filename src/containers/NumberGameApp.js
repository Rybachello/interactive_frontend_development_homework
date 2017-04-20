import React from 'react';
import GuessNumberForm from '../components/GuessNumberForm';
import NumberHintList from '../components/NumberHintList';

const NumberGameApp = (props) => {
    console.log(props);
    if (props.game.status === 'waiting_for_move') {
        return (
            <div className='guess_number'>
                <h2>Number Guess Game</h2>
                <GuessNumberForm inFlight = {props.game.inFlight} onSubmit={(number) => props.onNumberSubmit(number, props.game.id)}/>
                <NumberHintList moves={props.game.move}/>
            </div>
        );
    }
    if (props.game.status === 'finished') {
        return (
            <div className='guess_number'>
                <h2>Number Guess Game</h2>
                <font size='4'>You win</font>
                <NumberHintList moves={props.game.move}/>
            </div>
        );
    }
};
  NumberGameApp.propTypes = {
      game:React.PropTypes.shape({
         type: React.PropTypes.string,
         id: React.PropTypes.string,
         moves: React.PropTypes.array
     }).isRequired,
     onNumberSubmit: React.PropTypes.func.isRequired
 };

export default NumberGameApp;

