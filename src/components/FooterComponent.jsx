import React from "react";
import { Logo } from "../assets";

const FooterComponent = () => {
  return (
    <>
      <footer className="py-8 px-4 bg-gray-100">
        {/* Mobile View */}
        <div className="md:hidden text-center">
          <div className="mb-4">
            <img src={Logo} alt="Logo" className="w-12 h-12 relative mx-auto" />
            <span className="text-sm font-medium text-[#3840CD] mt-1 block">
              BULL RUN
            </span>

            {/* Product Column */}
            <div className="md:hidden text-center p-4 rounded-lg bg-gray-100 border-t border-gray-300 mt-4 shadow-md">
              <div className="flex flex-col gap-3 mt-4">
                <p className="font-bold text-[#3840CD]">Product</p>
                <p className="text-[12px] text-[#ABB0C1]">App</p>
                <p className="text-[12px] text-[#ABB0C1]">Roadmap</p>
                <p className="text-[12px] text-[#ABB0C1]">Gitbook</p>
              </div>

              {/* Company Column */}
              <div className="flex flex-col gap-3 mt-4">
                <p className="font-bold text-[#3840CD]">Company</p>
                <p className="text-[12px] text-[#ABB0C1]">About us</p>
                <p className="text-[12px] text-[#ABB0C1]">Roadmap</p>
                <p className="text-[12px] text-[#ABB0C1]">Team</p>
              </div>

              {/* Support Column */}
              <div className="flex flex-col gap-3 mt-4">
                <p className="font-bold text-[#3840CD]">Support</p>
                <p className="text-[12px] text-[#ABB0C1]">Terms of use</p>
                <p className="text-[12px] text-[#ABB0C1]">Privacy Policy</p>
                <p className="text-[12px] text-[#ABB0C1]">Cookie</p>
                <p className="text-[12px] text-[#ABB0C1]">Policy Disclaimer</p>
              </div>

              {/* Social Column */}
              <div className="flex flex-col gap-3 mt-4">
                <p className="font-bold text-[#3840CD]">Social</p>
                <p className="text-[12px] text-[#ABB0C1]">X (Twitter)</p>
                <p className="text-[12px] text-[#ABB0C1]">Telegram</p>
                <p className="text-[12px] text-[#ABB0C1]">Instagram</p>
                <p className="text-[12px] text-[#ABB0C1]">Facebook</p>
                <p className="text-[12px] text-[#ABB0C1]">Reddit</p>
                <p className="text-[12px] text-[#ABB0C1]">LinkedIn</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex justify-between gap-[55px]">
          {/* Left Div */}
          <div className="flex-1">
            <img src={Logo} alt="" className="w-12 h-12 relative" />
            <span className="text-sm font-medium text-[#3840CD] mt-1">
              BULL RUN
            </span>{" "}
          </div>

          {/* Right Div */}
          <div className="flex flex-1 gap-20">
            {/* Product Column */}
            <div className="flex flex-col gap-3">
              <p className="font-bold text-[#3840CD]">Product</p>
              <p className="text-[12px] text-[#ABB0C1]">App</p>
              <p className="text-[12px] text-[#ABB0C1]">Roadmap</p>
              <p className="text-[12px] text-[#ABB0C1]">Gitbook</p>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-3 ml-8">
              <p className="font-bold text-[#3840CD]">Company</p>
              <p className="text-[12px] text-[#ABB0C1]">About us</p>
              <p className="text-[12px] text-[#ABB0C1]">Roadmap</p>
              <p className="text-[12px] text-[#ABB0C1]">Team</p>
            </div>

            {/* Support Column */}
            <div className="flex flex-col gap-3 ml-8">
              <p className="font-bold text-[#3840CD]">Support</p>
              <p className="text-[12px] text-[#ABB0C1]">Terms of use</p>
              <p className="text-[12px] text-[#ABB0C1]">Privacy Policy</p>
              <p className="text-[12px] text-[#ABB0C1]">Cookie</p>
              <p className="text-[12px] text-[#ABB0C1]">Policy Disclaimer</p>
            </div>

            {/* Social Column */}
            <div className="flex flex-col gap-3 ml-8">
              <p className="font-bold text-[#3840CD]">Social</p>
              <p className="text-[12px] text-[#ABB0C1]">X (Twitter)</p>
              <p className="text-[12px] text-[#ABB0C1]">Telegram</p>
              <p className="text-[12px] text-[#ABB0C1]">Instagram</p>
              <p className="text-[12px] text-[#ABB0C1]">Facebook</p>
              <p className="text-[12px] text-[#ABB0C1]">Reddit</p>
              <p className="text-[12px] text-[#ABB0C1]">LinkedIn</p>
            </div>
          </div>
        </div>
      </footer>
      {/* Bottom section of the footer */}
      <div
        className=" text-center text-[12px] p-4 rounded-lg"
        // className="text-center text-sm mt-4"
        style={{ backgroundColor: "#F8F9FB" }}
      >
        <p className="text-[10px] text-[#CCCFDA]">
          Copyright © 2024 Designed by Entitled<b className="text-[#c2aaaa]">arts</b>. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default FooterComponent;
