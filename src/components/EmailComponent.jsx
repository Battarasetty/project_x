import React from "react";
import { email_image } from "../assets";

const EmailComponent = () => {
  return (
    <div className="b" style={{ backgroundColor: "#F8F9FB" }}>
      <div className="container flex flex-col md:flex-row mx-auto pt-8 px-[2.25rem]">
        <div className="md:w-[55%] ">
          <h1 className="mb-4 text-[#242531] font-bold text-[20px]">Stay on top of crypto investments by following the experts.</h1>
          <p className="mb-4 text-[#838A9B] text-[12px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          </p>
          <div className="mb-4 flex gap-4">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your e-mail address"
              className="p-2 border bg-[#F1F2F5] w-[50%] text-[10px] rounded"
            />
            <button className="ml-2 p-2 bg-blue-500 text-white rounded">Subscribe</button>
          </div>
        </div>
        <div className="md:w-[45%]">
          <img src={email_image} alt="email" className="" />
        </div>
      </div>
    </div>
  );
};

export default EmailComponent;
