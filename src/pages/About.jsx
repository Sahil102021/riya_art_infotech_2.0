import React from 'react'
import Banner from '../componate/ul/Banner'
import BigCard from '../componate/ul/BigCard'
import AboutHero from '../componate/AboutHero'
import Price from '../componate/Price'

const About = () => {
  return (
    <div>

       <section>
        <div className="w-full pt-14 lg:pt-20 xl:pt-20 bg-gradient-to-b from-blue-300 to-bg-[#fff]">
          <div className="main-container">
            <AboutHero />
          </div>
        </div>
      </section>

      <section>
      <div className="w-full">
        <div className="main-container">
            <Banner />
        </div>
      </div>
      </section>

      <section>
          <div className="w-full">
            <div className="main-container">
              <BigCard />
            </div>
          </div>
      </section>

      <section>
        <div className="w-full section-space bg-[var(--bg-color-i)] ">
          <div className="main-container">
            <Price />
          </div>
        </div>
      </section>


    </div>
  )
}

export default About;