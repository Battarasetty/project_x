import React, { useState } from "react";
import {
  Logo,
  Favorite,
  pie,
  Notification_bold,
  Notification,
} from "../../assets";
import { mockDataToken } from "../../constants/Data";
import ConnectWalletModal from "../../components/ConnectWalletModal";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  const [selectedOption2, setSelectedOption2] = useState("Ethereum");
  const [hasNotifications, setHasNotifications] = useState(true);
  const [selectedOption1, setSelectedOption1] = useState("Pool Participants");
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const handleDropdownChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleDropdownChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleConnectWallet = () => {
    setOpenModal(true);
    console.log("Connect Wallet clicked");
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handlePoolCreatorClick = () => {
    console.log("Redirecting to Pool Creator");
    navigate("/pool-creator");
    handleClose();
  };

  return (
    <header className="border-b">
      <div className="flex justify-between m-auto items-center p-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <div className="flex flex-col items-center">
              <img src={Logo} alt="" className="w-12 h-12 relative" />
              <span className="text-sm font-medium text-[#3840CD] absolute top-[38px] left-[50px]">
                BULL RUN
              </span>
            </div>
          </Link>
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
              className="dropdown-style"
            >
              <option value="Pool Participants">Pool Participants</option>
              <option value="Etherum">Pool Creator</option>
            </select>

            {/* Dropdown 2 */}
            <select
              value={selectedOption2}
              onChange={handleDropdownChange2}
              className="dropdown-style"
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

      {/* Modal Component */}
      <div className="w-[80vw] mx-auto">
        <ConnectWalletModal
          open={openModal}
          handleClose={handleClose}
          onPoolCreatorClick={handlePoolCreatorClick}
        />
      </div>
    </header>
  );
};

export default Topbar;
