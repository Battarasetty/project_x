import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Arrow, currentCircle, defaultCircle, Logo, pool, portfolio } from "../../assets";

const StatBox = () => {
  const [reducedFontSize, setReducedFontSize] = useState("5px");
  const [reducedImageSize, setReducedImageSize] = useState("40px");
  const [imageMargin, setImageMargin] = useState("55px");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      name: "NOW",
      description: [
        "SIMPLE",
        "ACHIEVE",
        "YOUR",
        "FINANCIAL",
        "FREEDOM",
        "WITH XBR",
      ],
      logo: Logo,
    },
	{
      id: 2,
      name: "Harish",
      description: [
        "SIMPLE",
        "ACHIEVE",
        "YOUR",
        "FINANCIAL",
        "FREEDOM",
        "WITH XBR",
      ],
      logo: pool,
    },
    {
      id: 3,
      name: "Battarasetty",
      description: [
        "SIMPLE",
        "ACHIEVE",
        "YOUR",
        "FINANCIAL",
        "FREEDOM",
        "WITH XBR",
      ],
      logo: portfolio,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const newFontSize = window.innerWidth < 600 ? "4px" : "7px";
      const newImageSize = window.innerWidth < 600 ? "10px" : "40px";
      const newMargin = window.innerWidth < 600 ? "83px" : "55px";

      setReducedFontSize(newFontSize);
      setReducedImageSize(newImageSize);
      setImageMargin(newMargin);
    };

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <Box
      borderRadius="8px"
      border="1px solid #F1F2F5"
      className="px-3 h-[197px] pt-3 pb-2 flex flex-col gap-1 relative overflow-hidden"
      sx={{ backgroundColor: "#F1F2F5", boxShadow: "0px 0px 12px #F1F2F5", height: "250px" }}
    >
      <div className="flex items-center justify-between mt-1">
        <h3 className="text-[16px] font-semibold text-[#000000]">
          Be on the top
        </h3>
        <span className="flex items-center gap-0.05 text-[#5763F3] text-[8px] font-normal">
          more <img src={Arrow} alt="" className="ml-1 w-2 h-2" />
        </span>
      </div>
      <div className="carousel-container mt-2">
        <div key={currentSlide} className={`slide active`}>
          <div className="flex items-center">
            <img
              src={slides[currentSlide].logo}
              className="w-[150px] h-[150px]"
              alt="Logo"
            />
            <div
              style={{
                color: "#9124FD",
                display: "flex",
                flexDirection: "column",
                height: reducedImageSize,
                marginLeft: "3px",
                fontSize: "6px",
                marginBottom: "78px",
                fontWeight: "600",
              }}
            >
              <div>{slides[currentSlide].name}</div>
              {slides[currentSlide].description.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center absolute bottom-4 w-full">
        {slides.map((_, index) => (
          <img
            key={index}
            src={index === currentSlide ? currentCircle : defaultCircle}
            alt={`point-${index}`}
            className="w-2 h-2 mx-1"
          />
        ))}
      </div>
    </Box>
  );
};

export default StatBox;
