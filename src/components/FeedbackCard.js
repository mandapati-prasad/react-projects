import React from 'react'
import {quotes} from "../assets"

const FeedbackCard = ({title, content, name, img}) => {
  return (
    <div className="dark:text-white flex flex-col max-w-[350px] h-[370px] justify-evenly p-5 ss:p-10 rounded-3xl mx-auto md:mx-0 hover:shadow-lg transition-all transform duration-300 hover:shadow-cyan-300 dark:bg-inherit hover:bg-gradient-to-br dark:from-zinc-600/60 from-10% dark:to-slate-900 from-gray-100 to-gray-100 to-100%">
      <div className='w-full flex justify-start'>
        <img src={quotes} alt="" />
      </div>

      <p className='sm:text-lg'>{content}</p>

      <div className='flex items-center'>
        <img src={img} alt="profile" className="w-[50px] h-[50px] mr-5" />
        <div>
          <h1 className='sm:text-lg font-semibold'>{title}</h1>
          <p className='text-gray-400 text-sm font-medium'>{ name }</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard