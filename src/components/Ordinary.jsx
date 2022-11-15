import React from 'react';
import styles from '../style';
import { ordinary1, ordinary2 } from '../assets';

export const Ordinary = () => {
  return (
    <section id='ordinary' className={`${styles.sectionBox} ordinary lg:h-[1050px] md:h-[940px] h-[712px]`}>
      <div className={`${styles.sectionSecond}`}>
        <p className={`md:text-[30px] text-[16px] md:leading-[40px] leading-[30px] max-w-3xl z-10`}>
          Ordinary receives average results. <br/>  We’re constantly testing out and trying different 
          approaches to find better results. Our innovative spirit just doesn’t die, and the graft 
          continues. We don’t just manage your campaigns, we’re constantly improving them, just 
          like a dry aged vintage we only get better with time.
        </p>
        <img 
          src={ordinary1} 
          alt="ordinary1" 
          className='lg:block hidden absolute top-0 right-0' 
        />
        <img 
          src={ordinary2} 
          alt="ordinary2" 
          className='lg:hidden block absolute top-0 left-0' 
        />
      </div>
    </section>
  )
}
