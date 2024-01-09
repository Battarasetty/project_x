import React from "react";
import SwitchWithLabel from "./SwitchWithLabel"; // Import SwitchWithLabel
import { eye_x, person } from "../assets";

const PortfolioInfo = ({ showHighlights, setShowHighlights }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <img src={person} alt="Person" className="w-5 h-5" />
          <p className="text-[#838A9B] text-[10px]">Total Portfolio Value</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-bold">$00.00</p>
          <img src={eye_x} alt="Person" className="w-3 h-3" />
        </div>
      </div>

      <div>
        <SwitchWithLabel
          label="Show Charts"
          checked={showHighlights}
          onChange={() => setShowHighlights(!showHighlights)}
          className="ml-4"
        />
      </div>
    </div>
  );
};

export default PortfolioInfo;
