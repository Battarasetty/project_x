import React from "react";
import SwitchWithLabel from "./SwitchWithLabel";
import { eye_x, person } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { setShowHighlights } from "../redux/poolFormSection/poolFormSectionSlice";

const PortfolioInfo = ({
  isParticipantDetailsPage,
  totalValue,
  twentyFourHourChange,
}) => {
  const dispatch = useDispatch();

  const showHighlights = useSelector((state) => state.poolForm.showHighlights);

  const portfolioLabelText = isParticipantDetailsPage
    ? "XBR474392"
    : "Total Portfolio Value";

  const displayTotalValue =
    totalValue || (isParticipantDetailsPage ? "$00.00" : "$384,321,120.12");

  return (
    <div className="flex mt-8 items-center justify-between">
      <div className="">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <img src={person} alt="Person" className="w-5 h-5" />
            <p className="text-[#838A9B] text-[10px]">{portfolioLabelText}</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-bold">{displayTotalValue}</p>
            <img src={eye_x} alt="Person" className="w-3 h-3" />
          </div>
        </div>

        {/* Additional paragraph for 24h change */}
        {twentyFourHourChange && (
          <p className="text-green-500 text-[10px]">
            + {twentyFourHourChange} (24h)
          </p>
        )}
      </div>

      <div>
        <SwitchWithLabel
          label="Show Charts"
          checked={showHighlights}
          onChange={() => dispatch(setShowHighlights(!showHighlights))}
          className="ml-4"
        />
      </div>
    </div>
  );
};

export default PortfolioInfo;
