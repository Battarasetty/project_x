import React from "react";
import { Logo } from "../assets";

const FooterComponent = () => {
  return (
    <footer className="pt-8">
      <div className="flex gap-[55px]">
        {/* Left Div */}
        <div className="mb-4 flex-1 md:mb-0 md:ml-8">
          <img src={Logo} alt="" className="w-12 h-12 relative" />
          <span className="text-sm font-medium text-[#3840CD] mt-1">
            BULL RUN
          </span>{" "}
        </div>

        {/* Right Div */}
        <div className="flex mr-[140px] gap-[60px]">
          {/* Product Column */}
          <div className="mb-4 md:mb-0 md:ml-8 flex flex-col gap-3">
            <p className="font-bold">Product</p>
            <p className="text-[12px] text-[#ABB0C1]">App</p>
            <p className="text-[12px] text-[#ABB0C1]">Roadmap</p>
            <p className="text-[12px] text-[#ABB0C1]">Gitbook</p>
          </div>

          {/* Company Column */}
          <div className="mb-4 md:mb-0 md:ml-8 flex flex-col gap-3">
            <p className="font-bold">Company</p>
            <p className="text-[12px] text-[#ABB0C1]">About us</p>
            <p className="text-[12px] text-[#ABB0C1]">Roadmap</p>
            <p className="text-[12px] text-[#ABB0C1]">Team</p>
          </div>

          <div className="mb-4 md:mb-0 md:ml-8 flex flex-col gap-3">
            <p className="font-bold">Company</p>
            <p className="text-[12px] text-[#ABB0C1]">Terms of use</p>
            <p className="text-[12px] text-[#ABB0C1]">Privacy Policy</p>
            <p className="text-[12px] text-[#ABB0C1]">Cookie</p>
            <p className="text-[12px] text-[#ABB0C1]">Policy Disclaimer</p>
          </div>

          {/* Support Column */}
          <div className="mb-4 md:mb-0 md:ml-8 flex flex-col gap-3">
            <p className="font-bold">Support</p>
            <p className="text-[12px] text-[#ABB0C1]">Terms of use</p>
            <p className="text-[12px] text-[#ABB0C1]">Privacy Policy</p>
            <p className="text-[12px] text-[#ABB0C1]">Cookie</p>
            <p className="text-[12px] text-[#ABB0C1]">Policy Disclaimer</p>
          </div>

          {/* Social Column */}
          <div className="md:ml-8 flex flex-col gap-3">
            <p className="font-bold">Social</p>
            <p className="text-[12px] text-[#ABB0C1]">X (Twitter)</p>
            <p className="text-[12px] text-[#ABB0C1]">Telegram</p>
            <p className="text-[12px] text-[#ABB0C1]">Instagram</p>
            <p className="text-[12px] text-[#ABB0C1]">Facebook</p>
            <p className="text-[12px] text-[#ABB0C1]">Reddit</p>
            <p className="text-[12px] text-[#ABB0C1]">LinkedIn</p>
          </div>
        </div>
      </div>

      {/* Bottom section of the footer */}
      <div
        className="spy-4 mt-8 text-center text-[12px] p-4"
        style={{ backgroundColor: "#F8F9FB" }}
      >
        <p className="text-[8px]">
          Copyright © 2024 Designed by Entitled<b>arts</b>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
