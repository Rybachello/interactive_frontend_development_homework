import React from 'react'

const Header = (props) => {
  return (
    <div className='game-header'>
      <h1>{props.text}</h1>
    </div>
  )
}

export default Header

