import React from "react";
import styles from "../style";
import { footerLink } from "../constants";
import { logo, facebook, instagram, linkedin, twitter } from "../assets";
import Social from "./Social";

export const Footer = () => {
  return (
    <section
      id="contacts"
      className={`${styles.sectionBox} lg:h-[220px] md:h-[340px] ms:h-[280px] h-[600px] bg-[#1E1421]`}>
      <div className={`${styles.sectionSecond}`}>
        <div className="my-5 flex flex-row justify-between">
          <ul className="flex flex-wrap">
            {footerLink.map((nav, index) => (
              <li
                className={`py-5  ${
                  index === footerLink.length - 1 ? "mr-0" : "mr-14"
                }`}
                key={nav.id}>
                <a className="md:text-[18px] text-base text-[#A5ABAD]" href=" ">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          <Social className="hidden lg:flex items-center" />
        </div>
        <hr className="border-gray-800" />
        <div className="flex lg:flex-row flex-col justify-between my-8">
          <div className="flex sm:flex-row flex-col-reverse justify-between">
            <div className="flex flex-row items-end">
              <img src={logo} alt="logo" className="w-[90px] h-[43px]" />
              <h4 className="py-2 px-8 text-[14px] text-[#626262]">
                Matching your ambitions
              </h4>
            </div>
            <Social className="flex lg:hidden sm:my-0 my-5 justify-between" />
          </div>

          <div className="flex sm:flex-row flex-col lg:items-end items-center justify-between lg:mt-0 mt-6">
            <a className="py-2 text-[14px] text-[#626262]" href=" ">
              Privacy Policy
            </a>
            <p className="py-2 pl-8 text-[14px] text-[#626262]">
              2021 Plexus Avant Media. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
