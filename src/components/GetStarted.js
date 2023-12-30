import React from "react";
import { MdArrowOutward } from "react-icons/md";

const GetStarted = () => {
  return (
    <div className="w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer">
      <div className="flex justify-center items-center w-full h-full dark:bg-primary bg-cyan-950 rounded-full">
        <p className="bg-cyan-300 text-gradient font-medium text-[18px] leading-[28px]">
          <span className="flex items-center">
            Get
            <span className="ml-3">
              <MdArrowOutward size={20} color="white" />
            </span>
          </span>
          <span>Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
