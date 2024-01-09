import React from "react";
import { add_pool, bike, blue_circle } from "../assets";
import { useDispatch } from "react-redux";
import { setPoolFormOpen } from "../redux/pool/poolSlice";

const PortfolioOverview = () => {

  const dispatch = useDispatch();

  const handleCreatePoolClick = () => {
    dispatch(setPoolFormOpen(true));
  };


  return (
    <div className="flex mt-[60px] flex-col " style={{ width: "20%", gap: "24px", paddingRight: "20px" }}>
      <div className="flex items-center gap-2" style={{ paddingLeft: "20px" }}>
        <div style={{ position: "relative" }}>
          <img src={blue_circle} alt="Blue Circle" className="w-10 h-10" />
          <img src={bike} alt="Bike" className="w-8 h-8 absolute" style={{ bottom: "5px", left: "4px" }} />
        </div>
        <h2 className="text-xs font-semibold">
          Portfolio <br /> Overview
        </h2>
      </div>
      <div className="flex gap-2 items-center pb-3" style={{ paddingLeft: "20px", borderBottom: "1px solid #F1F2F5" }}>
        <img src={add_pool} alt="Add" className="font-bold w-2.5 h-2.5" />
        <p className="text-[#3840CD] text-xs font-semibold" onClick={handleCreatePoolClick}>Create Pool</p>
      </div>
    </div>
  );
};

export default PortfolioOverview;
