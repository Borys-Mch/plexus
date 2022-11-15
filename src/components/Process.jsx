import React from 'react';
import styles from '../style';

export const Process = () => {
  return (
    <section id='process' className={`${styles.sectionBox} lg:h-[1350px] md:h-[1750px] h-[2200px]`}>
      <div className={`${styles.sectionSecond}`}>
        <h2 className={`${styles.textH2Left}`}>PROCESS:</h2>
        <p className={`${styles.textParagraph} pt-[55px]`}>
          Building a successful paid search campaign requires finding the proper keywords and 
          understanding how they represent your audience's intent.
        </p>
        <h4 className='text-[25px] leading-[45px] pt-[45px]'>Like orchestrating a symphony.</h4>
        <p className={`${styles.textParagraph} pt-[45px]`}>
          We have the capabilities of organising multiple ad sets and campaigns. 
          Our meticulous planning and construction of sophisticated campaigns allows us 
          to create an orchestra of campaigns all working alongside each other to produce a 
          symphony of efficient high converting ads bringing you more customers.
        </p>

        <div className='flex flex-wrap lg:pt-[200px]  pt-24'>

          <div className='lg:w-[50%] w-full pr-24'>
            <h3 className='font-bold md:text-[40px] text-[25px] md:leading-10 leading-6'>Audience Selection</h3>
            <p className={`${styles.textParagraph} pt-5`}>
              Targeting consumers based on their online behaviour rather than keywords is 
              critical for connecting your business with the relevant audiences.
            </p>
          </div>

          <div className='lg:w-[50%] w-full lg:pt-0 pt-24'>
            <h3 className='font-bold md:text-[40px] text-[25px] md:leading-10 leading-6'>Advert Copy</h3>
            <p className={`${styles.textParagraph} pt-5`}>
              It's critical to convey the correct message to satisfy your audience's expectations 
              once you've figured out who they are and how to reach them. Testing creative 
              variations is an important part of ongoing development of search campaigns.
            </p>
          </div>

          <div className='lg:w-[50%] w-full lg:pr-24 pr-0 lg:pt-28 pt-24'>
            <h3 className='font-bold md:text-[40px] text-[25px] md:leading-10 leading-6'>Structure</h3>
            <p className={`${styles.textParagraph} pt-5`}>
              The backbone of your search account is campaign structure, and the approach you 
              select can make or break the performance of your paid media strategy. 
              To choose the appropriate one, you'll need an experienced eye and a thorough understanding 
              of your product, market, and relevant technology.
            </p>
          </div>

          <div className='lg:w-[50%] w-full lg:pt-28 pt-24'>
            <h3 className='font-bold md:text-[40px] text-[25px] md:leading-10 leading-6'>Strategy</h3>
            <p className={`${styles.textParagraph} pt-5`}>
              It's time to start entering the auction after you've successfully built your keyword selection, 
              identified your audiences, crafted the appropriate campaign structure, and prepared your ad content. 
              By selecting the best approach for your bidding strategy, you can maximise all of your previous efforts.
            </p>
          </div>

        </div>

        <div className="lg:block absolute left-[-40%] bottom-0 w-[80%] h-[80%] blue__gradient" />
        <div className="absolute lg:left-[35%] left-[10%] lg:bottom-0 bottom-[-10%] lg:w-[50%] w-[50%] lg:h-[50%] h-[50%] pinc__gradient z-[2]" />
        <div className="absolute lg:left-[40%] left-[20%] lg:bottom-0 bottom-[-10%] w-[50%] h-[50%] navi__gradient z-[1]" />
        <div className="lg:block absolute left-[60%] bottom-[35%] w-[85%] h-[85%] purple__gradient" />

      </div>
    </section>
  )
}
