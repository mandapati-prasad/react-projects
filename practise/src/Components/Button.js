import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='btn'>{props.children}</button>
    </div>
  )
}

export default Button
