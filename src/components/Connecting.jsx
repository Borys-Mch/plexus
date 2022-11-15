import React from 'react'
import styles from '../style'
import { dot1, dot2, dot3, dot4 } from '../assets'

export const Connecting = () => {
  return (
    <section id='connecting' className={`${styles.sectionBox} lg:h-[1050px] md:h-[620px] h-[575px] bg-[#0E0A3833]`}>
      <div className={`${styles.sectionSecond}`}>
        <h2 className={`${styles.textH2} z-[2]`}>
          Connecting the dots.
        </h2>
        <p className={`${styles.textParagraph} text-center lg:pt-14 pt-10 z-[2]`}>
          We’re always looking to provide solutions to your problems, with expertise across 
          the board we measure and analyse your 
          <br className="lg:block hidden" /> 
          campaigns rigorously to better understand 
          your customers and what areas of improvement can bring better results.
        </p>
        <img 
          src={dot1} 
          alt="dot-1" 
          className='absolute w-[25%] h-auto top-[35%] left-[3%]'
        />
        <img 
          src={dot2} 
          alt="dot-2"
          className='absolute top-[10%] left-[50%]' 
        />
        <img 
          src={dot3} 
          alt="dot-3" 
          className='absolute w-[20%] h-auto top-[55%] left-[75%]'
        />
        <img 
          src={dot4} 
          alt="dot-4" 
          className='absolute w-[60%] h-auto top-[25%] left-[25%]'
        />
      </div>
    </section>
  )
}
