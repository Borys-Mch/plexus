import React from 'react';
import styles from '../style';

export const Keep = () => {
  return (
    <section id='keep' className={`${styles.sectionBox} keep md:h-[1050px] h-[900px] md:flex hidden`}>
      <div className={`${styles.sectionSecond}`}>
        <h2 className={`${styles.textH2Left}`}>
          Keep your friends close 
          <br className="lg:block hidden" />
          and your enemies closer
        </h2>
        <p className={`${styles.textParagraph} max-w-4xl pt-14 text-[#A5ABAD]`}>
          We’re constantly keeping an eye out on competitors and filling in the gaps they’re leaving. 
          In a ruthless competitive landscape we make sure it’s your campaigns that are fit for survival, 
          beating your competitors to your future customers.
        </p>
        <p className={`${styles.textParagraph} max-w-4xl text-[#A5ABAD]`}>
          With the constant updates from google and the marketing space in general, rest assured in 
          having a partner that’s on top of their game always keeping you ahead of the curve - with 
          new growth and higher ceilings just a click away, take the first step today.
        </p>
        <h3 className='font-bold text-[50px] leading-[50px]'>Let’s get them clicks</h3>
      </div>
    </section>
  )
}
