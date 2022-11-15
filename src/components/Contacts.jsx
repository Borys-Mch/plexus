import React from 'react';
import styles from '../style';

export const Contacts = () => {
  return (
    <section id='contacts' className={`${styles.sectionBox} contacts lg:h-[955px] md:h-[1140px] h-[1000px]`}>

      <div className='flex w-full absolute justify-between top-24 font-bold text-[112px] text-[#ffffff80]'>
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
        <div className='flex flex-wrap lg:pt-[200px]  pt-24'>
          <div className='lg:w-[50%] w-full pr-14'>
            <p className={`${styles.textParagraph}`}>The path to profitable marketing has never been clearer. Be bold. Start your journey today.</p>
            <input type="text" />

            <div height="110" width="500"> <circle cx="50" cy="55" r="45" fill="none" stroke="#F0CE01" strokeWidth="4" /> <text textAnchor="middle" x="250" y="55"> Circle Text</text> </div>

          </div>

          <div className='lg:w-[50%] w-full pl-14'>
            <div>
              <p className={`${styles.textParagraph}`}>Call us</p>
              <h3 className='font-medium md:text-[35px] text-[18px] md:leading-[60px] leading-[30px]'>+44 748 168 14 90</h3>
            </div>
            <div  className='pt-[50px]'>
              <p className={`${styles.textParagraph}`}>Email us</p>
              <h3 className='font-medium md:text-[35px] text-[18px] md:leading-[60px] leading-[30px]'>contact@plexusavantmedia.com</h3>
            </div>
            <div  className='pt-[50px]'>
              <p className={`${styles.textParagraph}`}>Address</p>
              <h3 className='font-medium md:text-[35px] text-[18px] md:leading-[60px] leading-[30px]'>20-22 Wenlock Road London N1 7GU</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
