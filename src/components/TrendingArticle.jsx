import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import {
  Arrow,
  Bitcoin,
  Eye,
  Heart,
  circle,
  currentCircle,
  defaultCircle,
  nativeBitcoin,
  pool,
  portfolio,
} from "../assets";

const TrendingArticle = () => {
  const slides = [
    {
      title: "Financial News",
      content:
        "Bitcoin jumps 160% in 2023 amid roller coaster ride; What lies ahead for?",
      time: "8H",
      views: 560,
      likes: 25,
      currency: "BTC",
      image: Bitcoin,
    },
    {
      title: "Trending News",
      content:
        "Bitcoin jumps 160% in 2023 amid roller coaster ride; What lies ahead for ?",
      time: "8H",
      views: 560,
      likes: 25,
      currency: "BTC",
      image: pool,
    },
    {
      title: "NDTV News",
      content:
        "Bitcoin jumps 160% in 2023 amid roller coaster ride; What lies ahead for ?",
      time: "8H",
      views: 560,
      likes: 25,
      currency: "BTC",
      image: portfolio,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the slide index, and reset to 0 if it exceeds the number of slides
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentSlide, slides.length]);

  return (
    <Box
      className="px-4 py-2 sliding-box transform transition-transform ease-in-out duration-500 "
      flex="1 1 100%"
      bg="white"
      boxShadow="0px 0px 12px rgba(0, 0, 0, 0.09)"
      border="1px solid #F1F2F5"
      borderRadius="8px"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-medium text-[#000000]">
          Top Community Article
        </h3>
        <span className="flex items-center gap-0.05 text-[#5763F3] text-[8px] font-normal">
          more <img src={Arrow} alt="" className="ml-1 w-2 h-2" />
        </span>
      </div>

        <div className="flex items-center mt-5">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="bg-transparent bg-no-repeat bg-cover opacity-70"
            style={{ width: "100px", height: "100px" }}
          />
          <div className="ml-3 flex flex-col gap-1">
            <h2 className="font-semibold text-[14px] text-[#838A9B]">
              {slides[currentSlide].title}
            </h2>
            <p className="font-semibold mt-1 text-[12px] text-[#242531]">
              {slides[currentSlide].content}
            </p>
            <div className="flex items-center mt-1">
              <span className="mr-1 text-[#ABB0C1] font-semibold text-[10px]">
                {slides[currentSlide].time}
              </span>
              <img src={circle} alt="" className="w-1 h-1 mx-2 my-1" />
              <div className="flex items-center ml-1">
                <img src={Eye} alt="" className="w-3 h-3 mr-0.5" />
                <span className="mr-2 text-[#ABB0C1] font-semibold text-[10px] ">
                  {slides[currentSlide].views}
                </span>
              </div>
              <img src={circle} alt="" className="w-1 h-1 mx-2 my-1" />
              <div className="flex items-center ml-1">
                <img src={Heart} alt="" className="w-3 h-3 mr-0.5" />
                <span className="mr-2 text-[#ABB0C1] font-semibold text-[10px]">
                  {slides[currentSlide].likes}
                </span>
              </div>
              <div className="flex items-center ml-2 bg-[#F1F2F5] rounded-lg">
                <img src={nativeBitcoin} alt="" className="w-3 h-3 mr-0.5" />
                <span className="text-[8px]">
                  {slides[currentSlide].currency}
                </span>
              </div>
            </div>
          </div>
        </div>

      <div className="flex justify-center mt-4 mb-2">
        {/* Add indicators for each slide */}
        {slides.map((_, index) => (
          <img
            key={index}
            src={index === currentSlide ? currentCircle : defaultCircle}
            alt={`indicator-${index}`}
            className="w-2 h-2 mx-1"
          />
        ))}
      </div>
    </Box>
  );
};

export default TrendingArticle;
