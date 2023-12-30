import React from 'react'

const Button = ({title}) => {
  return (
    <button className='bg-gradient-to-t from-cyan-600 to-cyan-600 dark:from-cyan-600 dark:to-cyan-300  text-lg p-4 font-medium dark:text-black text-white w-full cursor-pointer rounded-lg'>
      {title}
    </button>
  )
}

export default Button