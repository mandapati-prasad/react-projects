import React from 'react'
import { apple, google, bill } from "../assets"
import styles, {layout} from '../style'

const Billing = () => {
  return (
    <section className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="billing" className="w-full h-full z-[5]" />
        <div className="dark:bg-gray-600 bg-cyan-500 bg-opacity-25 w-[50%] h-[50%] absolute z-[3] rounded-full blur-[150px] top-0 -left-28 dark:-left-1/2" />
        <div className="dark:bg-pink-200 bg-cyan-300 dark:bg-opacity-45 w-[50%] h-[50%] absolute z-[0] blur-[150px] rounded-full bottom-0 dark:-left-1/2 -left-28" />
      </div>

      <div className={`${layout.sectionInfo} dark:text-white`}>
        <h1
          className={`${styles.heading2} text-black dark:text-white`}
        >
          Easily control your billing & invoicing.
        </h1>
        <p className={`${styles.paragraph} dark:text-gray-300 text-gray-700  sm:max-w-[470px] md:max-w-max my-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex ">
          <img src={google} alt="google" className="mt-5 mr-2" />
          <img src={apple} alt="google" className="mt-5 mr-2" />
        </div>
      </div>
    </section>
  );
}

export default Billing