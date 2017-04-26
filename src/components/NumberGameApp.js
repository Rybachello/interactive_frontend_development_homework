import React from 'react'
import GuessNumberForm from './GuessNumberForm'
import NumberHintList from './NumberHintList'

const NumberGameApp = (props) => {
  if (props.game.status === 'waiting_for_move') {
    return (
      <div className='guess_number'>
        <h2>Number Guess Game</h2>
        <GuessNumberForm fetchState={props.game.fetchState}
                         onSubmit={(number) => props.onNumberSubmit(number, props.game.id)}/>
        <NumberHintList moves={props.game.move}/>
      </div>
    )
  }
  if (props.game.status === 'finished') {
    return (
      <div className='guess_number'>
        <h2>Number Guess Game</h2>
        <font size='4'>You win</font>
        <NumberHintList moves={props.game.move}/>
      </div>
    )
  }
}
// NumberGameApp.propTypes = {
//     game: React.PropTypes.shape({
//         id: React.PropTypes.string,
//         type: React.PropTypes.string,
//         move: React.PropTypes.array,
//         fetchState: React.PropTypes.shape({
//             inFlight: React.PropTypes.bool.isRequired,
//             error: React.PropTypes.shape,
//         }),
//         status: React.PropTypes.string
//     }),
//     onNumberSubmit: React.PropTypes.func
// };

export default NumberGameApp

