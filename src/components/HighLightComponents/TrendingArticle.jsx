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
} from "../../assets";

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
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <Box
      className="px-[5px] py-2 sliding-box transform ease-in-out duration-500"
      flex="1 1 100%"
      bg="white"
      boxShadow="0px 0px 12px rgba(0, 0, 0, 0.09)"
      border="1px solid #F1F2F5"
      borderRadius="8px"
      overflow="hidden"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium text-gray-800">
          Top Community Article
        </h3>
        <span className="flex items-center gap-0.05 text-blue-500 text-xs font-normal">
          more
          <img src={Arrow} alt="" className="ml-1 w-2 h-2" />
        </span>
      </div>

      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 "
            style={{ minWidth: "100%" }}
          >
            <div className="flex items-center mt-1 p-4">
              <img
                src={slide.image}
                alt={slide.title}
                className="bg-transparent bg-no-repeat bg-cover opacity-70"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="ml-3 flex flex-col gap-1">
                <h2 className="font-semibold text-sm text-gray-800">
                  {slide.title}
                </h2>
                <p className="font-semibold text-xs text-gray-700">
                  {slide.content}
                </p>
                <div className="flex items-center mt-1">
                  <span className="mr-1 text-gray-600 font-semibold text-xs">
                    {slide.time}
                  </span>
                  <img src={circle} alt="" className="w-1 h-1 mx-2 my-1" />
                  <div className="flex items-center ml-1">
                    <img src={Eye} alt="" className="w-3 h-3 mr-0.5" />
                    <span className="mr-2 text-gray-600 font-semibold text-xs">
                      {slide.views}
                    </span>
                  </div>
                  <img src={circle} alt="" className="w-1 h-1 mx-2 my-1" />
                  <div className="flex items-center ml-1">
                    <img src={Heart} alt="" className="w-3 h-3 mr-0.5" />
                    <span className="mr-2 text-gray-600 font-semibold text-xs">
                      {slide.likes}
                    </span>
                  </div>
                  <div className="flex items-center ml-2 bg-gray-200 rounded-lg">
                    <img
                      src={nativeBitcoin}
                      alt=""
                      className="w-3 h-3 mr-0.5"
                    />
                    <span className="text-xs">{slide.currency}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-1 mb-1">
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
