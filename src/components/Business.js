import React from 'react'
import Button from './Button';
import { layout } from '../style';
import styles from '../style';
import { features } from '../constants';

const Feature = ({icon, title, content}) => {
  return (
    <div
      className={`flex xs:items-center flex-1 flex-col xs:flex-row py-5 sm:max-w-[600px] hover:bg-gradient-to-t dark:from-zinc-900/70  from-10% dark:to-zinc-600/60 to-100% from-cyan-200 to-cyan-400 rounded-xl`}
    >
      <div className='flex items-center'>
        <div className="dark:bg-cyan-950/30 bg-cyan-950 w-[65px] xs:w-[75px] p-5 rounded-full overflow-hidden object-contain xs:mb-0 mx-3 xs:mr-4">
          <img className="w-full h-full" src={icon} alt="icon" />
        </div>
        <h1 className="text-lg xs:hidden font-bold tracking-wide">
          {title}
        </h1>
      </div>
      <div>
        <h1 className="text-xl hidden xs:block font-bold tracking-wide">
          {title}
        </h1>
        <p className="font-normal ml-4 xs:ml-0 dark:text-gray-400 mt-3 max-w-[300px] sm:max-w-[480px]">{content}</p>
      </div>
    </div>
  );
}

const Business = () => {
  return (
    <div className={`text-gray-900 dark:text-gray-100  ${layout.section} mt-5 xs:mt-10`}>
      <div className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.heading2}`}>
          You do the{" "}
          <span className="bg-cyan-500 text-gradient">business</span> , we’ll
          handle the money.
        </h1>
        <p className={`text-gray-700 dark:text-gray-200 ${styles.paragraph} max-w-[470px] my-4`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <div className="w-36 mt-5">
          <Button title="Get Started" />
        </div>
      </div>

      <div className={`${layout.sectionImg} flex-col sm:gap-5`}>
        {
          features.map((feature, index) => {
            return <Feature title={ feature.title} icon={feature.icon} content={feature.content} />
          })
          }
      </div>
    </div>
  );
}

export default Business