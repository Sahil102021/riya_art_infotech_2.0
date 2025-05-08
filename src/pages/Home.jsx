import React from "react";
import Hero from "../componate/Hero";
import TimelineComponents from "../componate/ul/TimelineComponents";
import Stats_2 from "../componate/ul/Stats_2";
import Services from "../componate/Services";
import BannerHero from "../componate/BannerHero";
import SwiperSection from "../componate/SwiperSection";
import Price from "../componate/Price";

const Home = () => {
  return (
    <div>
      <section>
        <div className="w-full py-24">
          <div className="main-container">
            <Hero />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full py-24">
          <div className="main-container">
            <Services />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full py-24">
          <div className="main-container">
            <BannerHero />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full py-24">
          <div className="main-container">
            <TimelineComponents />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full py-24">
          <div className="main-container">
            <Stats_2 />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full py-24">
          <div className="main-container">
            <SwiperSection />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full py-24">
          <div className="main-container">
            <Price />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
