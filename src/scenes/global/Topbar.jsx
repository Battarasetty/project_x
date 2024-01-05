import React, { useState } from "react";
import {
  Logo,
  Favorite,
  pie,
  Notification_bold,
  Notification,
} from "../../assets";
import { mockDataToken } from "../../constants/Data";

const Topbar = () => {
  const [selectedOption1, setSelectedOption1] = useState("Pool Participants");
  const [selectedOption2, setSelectedOption2] = useState("Ethereum");
  const [hasNotifications, setHasNotifications] = useState(true);

  const handleDropdownChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleDropdownChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleConnectWallet = () => {
    console.log("Connect Wallet clicked");
  };

  return (
    <header className="border-b">
      <div className="flex justify-between m-auto items-center p-3">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <img src={Logo} alt="" className="w-12 h-12 relative" />
            <span className="text-sm font-medium text-[#3840CD] absolute top-[38px] left-[50px]">
              BULL RUN
            </span>
          </div>
        </div>

        {/* Wallet */}
        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            {mockDataToken.map((item) => (
              <li
                key={item.id}
                className="flex gap-2 items-center text-sm text-gray-500"
              >
                <span>{item.token}:</span>
                <span className="text-blue-500">{item.value.toFixed(4)}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img src={Favorite} alt="Favorite Icon" className="w-4 h-4" />
              <p className="text-sm text-[#202020]">Whitelist</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src={pie} alt="Pie Icon" className="w-4 h-4" />
              <p className="text-sm">Portfolio</p>
            </div>
            <div className="relative">
              <img
                src={hasNotifications ? Notification_bold : Notification}
                alt="Notification Icon"
                className="w-6 h-6"
              />
              {hasNotifications && (
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Dropdown 1 */}
            <select
              value={selectedOption1}
              onChange={handleDropdownChange1}
              className="p-2 border-solid border-2 rounded-lg bg-white text-black transition-all duration-300 focus:outline-none focus:border-blue-500"
              style={{
                boxShadow: "0px 0px 6px #00000029",
              }}
            >
              <option value="Pool Participants">Pool Participants</option>
              <option value="Etherum">Etherum</option>
              <option value="Binance">Binance</option>
              <option value="Avalanche">Avalanche</option>
              <option value="Fantom">Fantom</option>
            </select>

            {/* Dropdown 2 */}
            <select
              value={selectedOption2}
              onChange={handleDropdownChange2}
              className="p-2 border-solid border-2 rounded-lg bg-white text-black transition-all duration-300 focus:outline-none focus:border-blue-500"
              style={{
                boxShadow: "0px 0px 6px #00000029",
              }}
            >
              <option value="Ethereum">Ethereum</option>
              <option value="Binance">Binance</option>
              <option value="Avalanche">Avalanche</option>
              <option value="Fantom">Fantom</option>
              <option value="Arbitrum">Arbitrum</option>
            </select>

            {/* Connect Wallet Button */}
            <button
              className="p-2 border-solid border-2 rounded-lg bg-blue-500 text-white"
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
