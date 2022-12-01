import React from "react";
import styles from "../style";
import { arrow } from "../assets";

export const Contacts = () => {
  const str =
    "Start to work   Start to work   Start to work   Start to work   ";
  const textRnd = str.split("").map((char, i) => (
    <span
      key={i}
      style={{ transform: `rotate(${i * 5.6}deg)`, transformOrigin: `0 100px` }}
      className="absolute left-[50%] text-[0.9em]">
      {char}
    </span>
  ));

  return (
    <section
      id="contacts"
      className={`${styles.sectionBox} contacts lg:h-[955px] md:h-[1140px] h-[1000px]`}>
      <div className="flex w-full absolute justify-between top-24 font-bold md:text-[112px] text-[44px] text-[#ffffff80]">
        <span>C</span>
        <span>O</span>
        <span>N</span>
        <span>T</span>
        <span>A</span>
        <span>C</span>
        <span>T</span>
        <span>S</span>
      </div>

      <div className={`${styles.sectionSecond}`}>
        <div className="flex flex-wrap justify-between lg:pt-[200px]  md:pt-24 pt-48">
          <div className="lg:w-[40%] w-full">
            <p className={`${styles.textParagraph}`}>
              The path to profitable marketing has never been clearer. <br /> Be
              bold. Start your journey today.
            </p>
            <input
              className="p-5 mt-7 mb-[70px] rounded-md w-[100%]"
              type="text"
              placeholder="Write your email"
            />

            <div className="circle lg:flex hidden relative  justify-center items-center rounded-[50%] w-[200px] h-[200px]">
              <div
                className="absolute w-[30px] h-[30px] bg-cover rounded-[50%]"
                style={{ backgroundImage: `url(${arrow})` }}></div>
              <div className="absolute w-[100%] h-[100%] animate-spin-slow">
                <p>{textRnd}</p>
              </div>
            </div>
          </div>

          <div className="lg:w-[40%] w-full">
            <div>
              <p className={`${styles.textParagraph}`}>Call us</p>
              <h3 className="font-medium md:text-[35px] text-[18px] md:leading-[60px] leading-[30px]">
                +44 748 168 14 90
              </h3>
            </div>
            <div className="pt-[50px]">
              <p className={`${styles.textParagraph}`}>Email us</p>
              <h3 className="font-medium md:text-[35px] text-[18px] md:leading-[60px] leading-[30px]">
                contact@plexusavantmedia.com
              </h3>
            </div>
            <div className="pt-[50px]">
              <p className={`${styles.textParagraph}`}>Address</p>
              <h3 className="font-medium md:text-[35px] text-[18px] md:leading-[60px] leading-[30px]">
                20-22 Wenlock Road London N1 7GU
              </h3>
            </div>
            <div className="circle flex lg:hidden relative  justify-center items-center rounded-[50%] w-[200px] h-[200px] my-16 mx-auto">
              <div
                className="absolute w-[30px] h-[30px] bg-cover rounded-[50%]"
                style={{ backgroundImage: `url(${arrow})` }}></div>
              <div className="absolute w-[100%] h-[100%] animate-spin-slow">
                <p>{textRnd}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
