import React from "react";
import "./InfiniteScrollingText.css";

const InfiniteScrollingText = () => {
  return (
    <div className="scrolling-text-container h-12 flex  items-center">
      <div
        className="scrolling-text-inner"
        style={{
          "--marquee-speed": "20s",
          "--direction": "scroll-left",
        }}
        role="marquee"
      >
        <div className="scrolling-text">
          <div className="scrolling-text-item">🚀 Your First Announcement</div>
          <div className="scrolling-text-item">🔥 Your Second Announcement</div>
          <div className="scrolling-text-item">🌐 Your Third Announcement</div>
          <div className="scrolling-text-item">🎯 Your Fourth Announcement</div>

          {/* Repeat for seamless effect */}
          <div className="scrolling-text-item">🚀 Your First Announcement</div>
          <div className="scrolling-text-item">🔥 Your Second Announcement</div>
          <div className="scrolling-text-item">🌐 Your Third Announcement</div>
          <div className="scrolling-text-item">🚀 Your First Announcement</div>
          <div className="scrolling-text-item">🔥 Your Second Announcement</div>
          <div className="scrolling-text-item">🌐 Your Third Announcement</div>
          <div className="scrolling-text-item">🚀 Your First Announcement</div>
          <div className="scrolling-text-item">🔥 Your Second Announcement</div>
          <div className="scrolling-text-item">🌐 Your Third Announcement</div>
          <div className="scrolling-text-item">🎯 Your Fourth Announcement</div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollingText;
