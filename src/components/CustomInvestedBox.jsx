import React from "react";

const CustomInvestedBox = ({ name, value, imageSrc }) => {
  return (
    <div className="border p-2 rounded-md flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <div className="bg-[#D3D6E3] rounded-full w-8 h-8 flex items-center justify-center"></div>
        <div>
          <p className="text-sm">{name}</p>
          <p className="text-sm">{value}</p>
        </div>
      </div>
      <div>
        <img src={imageSrc} alt="pinned Token" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default CustomInvestedBox;
