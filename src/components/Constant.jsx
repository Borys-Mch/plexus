import React from 'react';
import styles from '../style';

export const Constant = () => {
  return (
    <section id='constant' className={`${styles.sectionBox} lg:h-[1050px] md:h-[744px] h-[795px] animation-selector`}>
      <div className={`${styles.sectionSecond}`}>
        <h2 className={`${styles.textH2}`}>All eyes on deck.</h2>
        <p className={`${styles.textParagraph} text-center lg:pt-14 pt-10`}>
          Constant monitoring of your ad accounts allows for seamless mounevoirs, updated strategies and constantly trying to achieve the 
          <br className="lg:block hidden" /> 
          best results possible with the least amount of spend. Our continuous work goes towards driving cost per clicks down while driving 
          <br className="lg:block hidden" /> 
          conversions up, generating as much profit as possible.
        </p>
        <p className={`${styles.textParagraph} text-center lg:pt-10 pt-8`}>
          We use the best in AI learning and technology to navigate your campaigns towards higher return on ad spend. By providing the 
          <br className="lg:block hidden" />
          perfect balance of human insight into consumer behaviour backed with the efficiency of technology, we produce refined 
          <br className="lg:block hidden" />
          campaigns that result in higher profits and ability to scale.
        </p>
      </div>
    </section>
  )
}
