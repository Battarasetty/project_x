import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { WhiteListModal } from "../../components";

const Topbar = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        // Metamask is installed
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (error) {
        console.error(err.message);
      }
    } else {
      // Metamask is not installed
      console.log("please install Metamask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect the metamask using Connect Button");
        }
      } catch (error) {
        console.error(err.message);
      }
    } else {
      // Metamask is not installed
      console.log("please install Metamask");
    }
  };

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, []);

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      // Metamask is not installed
      setWalletAddress("");
      console.log("please install Metamask");
    }
  };

  const whitelist = useSelector((state) => state.whitelist.whitelist);
  const [isWhitelistModalOpen, setWhitelistModalOpen] = useState(false);

  const handleWhitelistClick = () => {
    setWhitelistModalOpen(true);
  };

  const closeWhitelistModal = () => {
    setWhitelistModalOpen(false);
  };
  // console.log(whitelist);

  const [selectedOption2, setSelectedOption2] = useState("Ethereum");
  const [hasNotifications, setHasNotifications] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("Pool Participants");

  const handleDropdownChange = () => {
    setSelectedOption(
      selectedOption === "Pool Participants"
        ? "Pool Creator"
        : "Pool Participants"
    );
  };

  const options = ["Pool Participants", "Pool Creator"];

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

  const handlePoolParticipantClick = () => {
    console.log("Redirecting to Pool Creator");
    navigate("/pool-participant");
    handleClose();
  };

  return (
    <>
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
              <div
                className="flex items-center space-x-2 cursor-pointer transform transition-transform hover:scale-110"
                onClick={handleWhitelistClick}
              >
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
                value={selectedOption}
                onChange={handleDropdownChange}
                className="dropdown-style"
              >
                {options.map((option) => (
                  <option
                    key={option}
                    value={option}
                    disabled={option === selectedOption}
                  >
                    {option}
                  </option>
                ))}
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
                className="p-2 border-none border-2 rounded-lg bg-blue-500 text-white"
                // onClick={handleConnectWallet}
                onClick={connectWallet}
              >
                {(walletAddress && walletAddress.length > 0)
                  ? `Connected: ${walletAddress.substring(
                      0,
                      6
                    )}...${walletAddress.substring(38)}`
                  : "Connect Wallet"}
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
            onPoolParticipantClick={handlePoolParticipantClick}
          />
        </div>
      </header>
      {/* Display Whitelist Modal */}
      <WhiteListModal
        open={isWhitelistModalOpen}
        handleClose={closeWhitelistModal}
        title="Whitelisted Items"
        content={
          <ul>
            {whitelist.map((item) => (
              <li key={item._id}>
                {/* Display _id and Pool ID */}
                <p className="text-white">_id: {item._id}</p>
                <p className="text-white">Pool ID: {item["Pool ID"]}</p>
              </li>
            ))}
          </ul>
        }
      />
    </>
  );
};

export default Topbar;
