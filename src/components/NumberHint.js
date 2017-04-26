import React from 'react'
import { EQ, GT, LT } from '../reducers/GameReducer'
const NumberHint = (props) => {
  const getResult = () => {
    switch (props.comparedToAnswer) {
      case EQ: {
        return <span className='green'>{props.guess}: was correct!</span>
      }
      case LT: {
        return <span className='red'>{props.guess}: was lower than target</span>
      }
      case GT: {
        return <span className='red'>{props.guess}: was greater than target</span>
      }
    }
  }

  return (
    <div className='number-hint'>
      { getResult() }
    </div>
  )
}
// NumberHint.propTypes = {
//     guess: React.PropTypes.number,
//     comparedToAnswer: React.PropTypes.string,
// };
export default NumberHint
