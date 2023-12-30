import React from "react";
import discount from "../../assets/Discount.svg";
import styles from "../../style";
import GetStarted from "../GetStarted";
import robot from "../../assets/robot.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="home"
      className={`pt-10 sm:pt-0 flex flex-col md:flex-row font-poppins`}
    >
      <div
        className={`dark:text-white justify-start flex-1 ${styles.flexStart} flex-col sm:pl-20 px-6`}
      >
        <div className=" flex items-center bg-dark-discount-gradient bg-light-discount-gradient rounded-md py-1 px-4 sm:mb-10 mb-2">
          <img src={discount} alt="discountImg" />
          <p
            className={`font-poppins text-sm sm:text-lg text-gray-950 dark:text-white ${styles.paragraph}`}
          >
            <span>20% </span>
            <span className="dark:text-gray-500 text-cyan-500">
              DISCOUNT FOR{" "}
            </span>
            1 MONTH
            <span className="dark:text-gray-500 text-cyan-500"> ACCOUNT</span>
          </p>
        </div>

        <div className="flex ">
          <h1 className={`flex-1 font-bold mt-5 sm:mt-0 ${styles.heading2}`}>
            The Next <br />
            <span className="dark:bg-gradient-to-tr from-cyan-600 from-15% to-cyan-100 to-80% bg-cyan-500 bg-clip-text text-transparent ">
              Generation
            </span>{" "}
            <br />
            Payment Method
          </h1>

          <div className="ss:block hidden ml-16 sm:ml-16">
            <GetStarted />
          </div>
        </div>

        <div className="">
          <p
            className={`text-gray-900 ${styles.paragraph} mt-5 max-w-[650px] lg:max-w-[470px] dark:text-gray-300`}
          >
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>

      <div className="flex-1 flex sm:my-0 justify-center items-center mt-20 mb-10 sm:my-10 relative">
        <img src={robot} alt="" className="relative z-10" />
        <div
          className="absolute w-[50%] h-[60%] 
        bg-cyan-300 dark:bg-gradient-to-t from-slate-600 to-slate-700 left-[30%] top-10 bottom-0 rounded-full z-0 blur-[180px] dark:blur-[100px]"
        ></div>
        <div
          className="absolute w-[80%] h-[65%]
        bg-cyan-200 dark:bg-gradient-to-t from-slate-800 to-slate-900 right-[10%] top-20 bottom-0 rounded-full z-0 blur-[150px] dark:blur-[100px]"
        ></div>
      </div>

      <div className="ss:hidden relative mx-auto mb-12">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
