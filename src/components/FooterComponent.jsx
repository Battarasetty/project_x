import React from "react";
import { Logo } from "../assets";

const FooterComponent = () => {
  return (
    <footer className="pt-8">
      <div className="flex w-[70%] justify-center gap-[55px]">
        <div className="mb-4 md:mb-0 md:ml-8">
          <img src={Logo} alt="" className="w-12 h-12 relative" />
          <span className="text-sm font-medium text-[#3840CD] mt-1">
            BULL RUN
          </span>{" "}
        </div>
        <div className="mb-4 md:mb-0 md:ml-8">
          <p className="font-bold">Product</p>
          <p className="text-[12px]">App</p>
          <p className="text-[12px]">Roadmap</p>
          <p className="text-[12px]">Gitbook</p>
        </div>
        {/* 2nd Column: Company */}
        <div className="mb-4 md:mb-0 md:ml-8">
          <p className="font-bold">Company</p>
          <p className="text-[12px]">About us</p>
          <p className="text-[12px]">Roadmap</p>
          <p className="text-[12px]">Team</p>
        </div>
        {/* 3rd Column: Support */}
        <div className="mb-4 md:mb-0 md:ml-8">
          <p className="font-bold">Company</p>
          <p className="text-[12px]">Terms of use</p>
          <p className="text-[12px]">Privacy Policy</p>
          <p className="text-[12px]">Cookie</p>
          <p className="text-[12px]">Policy Disclaimer</p>
        </div>
        {/* 4th Column: Social */}
        <div className="md:ml-8">
          <p className="font-bold">Support</p>
          <p className="text-[12px]">Request Form</p>
          <p className="text-[12px]">Contact Support</p>
          <p className="text-[12px]">FAQ</p>
        </div>
        {/* 2nd Column: Company */}
        <div className="mb-4 md:mb-0 md:ml-8">
          <p className="font-bold">Social</p>
          <p className="text-[12px]">X (Twitter)</p>
          <p className="text-[12px]">Telegram</p>
          <p className="text-[12px]">Instagram</p>
          <p className="text-[12px]">Facebook</p>
          <p className="text-[12px]">Reddit</p>
          <p className="text-[12px]">LinkedIn</p>
        </div>
      </div>

      {/* Bottom section of the footer */}
      <div
        className="spy-4 mt-8 text-center text-[12px] p-4"
        style={{ backgroundColor: "#F8F9FB" }}
      >
        <p className="text-[8px]">
          Copyright © 2024 Xbullrun. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
