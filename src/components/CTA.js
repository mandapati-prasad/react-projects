import React from 'react'
import Button from './Button';
import styles, {layout} from '../style';
const CTA = () => {
  return (
    <section className={`${layout.section}`}>
      <div
        className={`w-full flex flex-col md:flex-row md:items-center py-6 px-6 md:px-20 rounded-3xl bg-gradient-to-br dark:from-zinc-600/60 from-10% dark:to-slate-900 from-cyan-200 to-cyan-300`}
      >
        <div className={`${layout.sectionInfo} dark:text-white`}>
          <h1 className={`${styles.heading2}`}>Let’s try our service now!</h1>
          <p
            className={`${styles.paragraph} max-w-[450px] my-4 text-gray-700 dark:text-gray-300`}
          >
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className='w-full flex-1 flex md:justify-end '>
          <div className="w-34 my-5 md:my-0">
            <Button title="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA