import React from 'react'
import Header from './Header'
const PlayerList = (props) => {
  if (props.status !== 'connected') {
    return (
      <div/>
    )
  }
  const players = props.players.map((player, idx) => {
    return <p key={idx}>{player.id === props.player.id ? player.name + '(you)' : player.name }</p>
  })
  return (
    <div className='player-list'>
      <Header text='Online Players'/>
      {players}
    </div>
  )
}
// NumberHintList.propTypes = {
//     moves: React.PropTypes.arrayOf(
//         React.PropTypes.shape({
//             guess: React.PropTypes.number.isRequired,
//             comparedToAnswer: React.PropTypes.string.isRequired,
//         }).isRequired
//     )
// };
export default PlayerList
