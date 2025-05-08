import React from 'react'
import Banner from '../componate/ul/Banner'
import BigCard from '../componate/ul/BigCard'

const About = () => {
  return (
    <div>
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


    </div>
  )
}

export default About;