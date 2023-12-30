import React from 'react'
import { stats } from '../constants'

const Stats = () => {
  return (
    <section className='dark:text-white flex
    flex-wrap font-poppins z-10'>
      {
        stats.map((item, index) => {
          return <div key={item.id} className={`flex flex-1 justify-center w-full items-center m-3 px-2 ${index !== stats.length - 1 ? 'sm:border-r-[3px]':'sm:border-r-0' } sm:border-gray-400`}>
            <h1 className='text-2xl md:text-4xl font-semibold mr-2 sm:mr-4'>{item.value}</h1>
            <p className='text-gradient text-sm md:text-xl font-semibold bg-cyan-600'>{item.title }</p>
          </div>
        })
      }
    </section>
  )
}

export default Stats