import React from 'react'
import Header from '../components/Header'
import InputComponent from '../components/InputComponent'

const GameLobby = (props) => {
  console.log(props)
  return (
    <div>
      <Header text='Game Lobby'/>
      <InputComponent connection={props.connection}
                      onConnectClick = {props.onConnectClick}
                      onDisconnectClick = {props.onDisconnectClick}/>
    </div>
  )
}

//todo: add prop types

export default GameLobby

