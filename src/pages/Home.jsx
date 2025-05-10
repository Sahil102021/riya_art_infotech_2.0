import React from "react";
import Hero from "../componate/Hero";
import TimelineComponents from "../componate/ul/TimelineComponents";
import Stats_2 from "../componate/ul/Stats_2";
import Services from "../componate/Services";
import BannerHero from "../componate/BannerHero";
import SwiperSection from "../componate/SwiperSection";
import Price from "../componate/Price";
import WavyAnimation from "../componate/ul/WavyAnimation/WavyAnimation";
import ProductCardPanel from "../componate/ProductCardPanel";
import AnimationCard from "../componate/ul/AnimationCard";
import ArrowZoomCard from "../componate/ul/ArrowZoomCard";
import "../App.css";
import InfiniteScrollingText from "../componate/ul/InfiniteScrollingText/InfiniteScrollingText";
const Home = () => {
  return (
    <div>
      <section>
        <div className="w-full pt-14 lg:pt-20 xl:pt-20 bg-gradient-to-b from-blue-300 to-bg-[#fff]">
          <div className="main-container">
            <Hero />
          </div>
        </div>
      </section>
      <section>
        <InfiniteScrollingText />
      </section>
      <section>
        <div className="w-full section-space">
          <div className="main-container">
            <Services />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full section-space">
          <div className="main-container">
            <ArrowZoomCard />
          </div>
        </div>
      </section>

      {/* <section>
        <div className="w-full section-space">
          <div className="main-container">
            <AnimationCard />
          </div>
        </div>
      </section> */}

      {/* <section>
        <div className="w-full section-space">
          <div className="main-container">
            <BannerHero />
          </div>
        </div>
      </section> */}

      <section>
        <div className="w-full section-space">
          <div className="main-container">
            <ProductCardPanel />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full section-space">
          <div className="main-container">
            <TimelineComponents />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full section-space">
          <div className="main-container">
            <Stats_2 />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full section-space">
          <div className="main-container">
            <SwiperSection />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full section-space">
          <div className="main-container">
            <Price />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
