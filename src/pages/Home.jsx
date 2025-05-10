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
import Card_2 from "../componate/ul/Card_2/Card_2";
import { cardData, testimonials } from "../conts/data";
import { motion } from "framer-motion";

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
            <div className="pt-10">
              <ArrowZoomCard />
            </div>
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
        <div className="w-full section-space ">
          <div className="px-5 mx-auto">
          <motion.div
            className="text-center mb-3 md:mb-6 2xl:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-size-3xl font-tertiary text-[var(--bg-primary)]">
              Discover Our Exclusive Collection
            </h2>
            <p className="font-size-xs text-gray-500">
              Handpicked items crafted with care and creativity — perfect for
              modern living
            </p>
          </motion.div>
          <SwiperSection variant="cardData" data={cardData} />
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
            <motion.div
              className="text-center mb-3 md:mb-6 2xl:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="font-size-3xl font-tertiary text-[var(--bg-primary)]">
                Discover Our Exclusive Collection
              </h2>
              <p className="font-size-xs text-gray-500">
                Handpicked items crafted with care and creativity — perfect for
                modern living
              </p>
            </motion.div>
            <SwiperSection variant="testimonials" data={testimonials} />
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
