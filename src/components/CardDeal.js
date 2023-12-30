import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} dark:text-white`}>
        <h1 className={`${styles.heading2}`}>
          Find a better card deal in few easy steps.
        </h1>
        <p
          className={`${styles.paragraph} dark:text-gray-300 text-gray-700 sm:max-w-[470px] md:max-w-max my-4`}
        >
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <div className="w-34 my-5">
          <Button title="Get Started" />
        </div>
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="" />
      </div>
    </section>
  );
}

export default CardDeal