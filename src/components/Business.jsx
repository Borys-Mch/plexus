import React from 'react'
import styles from '../style'

export const Business = () => {
  return (
    <section id='business' className={`${styles.sectionBox} lg:h-[1050px] md:h-[1140px] h-[1000px]`}>
      <div className={`${styles.sectionSecond}`}>
        <h2 className={`${styles.textH2Left}`}>
          Online presence playing hide 
          <br className="lg:block hidden" />
          and seek? <span className='text-pink-500'>Let's change that.</span>
        </h2>
        <p className={`${styles.textParagraph} lg:pt-14 pt-10`}>
          We put you right in front of your target audience through meticulous consumer research 
          and keyword planning, bridging the gap between your consumer’s search queries and your offer. 
          Leaving no stone unturned we cover all tracks with a multitude of strategies, whether you’re 
          looking to play the long game and drive brand awareness or acquiring conversions from the get go, 
          we have the blueprint to guide you towards your online goals. Don’t waste your ad budget. 
          Rest assured in your budget working towards generating more customers, growing your business 
          and scaling past plateaus with our sophisticated Google ad campaigns. Whether growing your e-commerce 
          brand with shopping campaigns or generating leads for your new start up, we have the means to direct 
          your campaigns to success.
        </p>
        <h3 className='font-bold md:text-[33px] text-[25px] md:leading-[33px] leading-[25px] lg:pt-24 md:pt-11 pt-8'>
          Make your business <span className='text-pink-500'>click</span>, with <span className='text-pink-500'>pay per click.</span>
        </h3>
        <div className="lg:block absolute left-[-40%] bottom-[-20%] w-[80%] h-[80%] blue__gradient hidden" />
        <div className="absolute lg:left-[35%] left-[20%] lg:bottom-[-20%] bottom-[-10%] lg:w-[50%] w-[70%] lg:h-[50%] h-[70%] pinc__gradient z-[2]" />
        <div className="absolute lg:left-[30%] left-[-10%] lg:bottom-[-20%] bottom-[10%] w-[70%] h-[70%] navi__gradient z-[1]" />
        <div className="lg:block absolute left-[70%] bottom-[30%] w-[85%] h-[85%] purple__gradient hidden" />
      </div>
    </section>
  )
}
