import React from "react";
import styles from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}
    >
      <div className="w-[400px] h-[50%] rounded-full bg-cyan-200 dark:bg-gray-500 z-[0] absolute md:bottom-20 bottom-[10%] md:-right-[200px] -right-[370px] dark:bg-opacity-80 bg-opacity-80 blur-[160px]" />
      <div className="w-[400px] h-[50%] rounded-full bg-cyan-200 dark:bg-gray-500 z-[3] absolute md:top-20 top-[10%] -right-[370px] md:-right-[200px] dark:bg-opacity-40 bg-opacity-40 blur-[160px]" />

      <div
        className={`flex flex-col md:flex-row justify-between items-center dark:text-white w-full mb-10 md:mb-20 z-[5]`}
      >
        <h1 className={`${styles.heading2}`}>
          What people are <br /> saying about us
        </h1>
        <div className="w-full flex my-5 md:my-0">
          <p
            className={`${styles.paragraph} text-gray-700 max-w-[470px] dark:text-gray-300`}
          >
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="w-full gap-16 md:gap-28 flex flex-wrap z-[5]">
        {feedback.map((item, index) => {
          return <FeedbackCard {...item} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
