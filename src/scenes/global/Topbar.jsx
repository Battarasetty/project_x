import React, { useEffect, useState } from "react";
import {
  Logo,
  Favorite,
  pie,
  Notification_bold,
  Notification,
  hamburger,
  clear,
} from "../../assets";
import { mockDataToken } from "../../constants/Data";
import ConnectWalletModal from "../../components/ConnectWalletModal";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { WhiteListModal } from "../../components";
import { SwipeableDrawer } from "@mui/material";

const Topbar = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("Ethereum");
  const [hasNotifications, setHasNotifications] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Pool Participants");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isWhitelistModalOpen, setWhitelistModalOpen] = useState(false);
  const [drawerState, setDrawerState] = useState({
    left: false,
  });

  const navigate = useNavigate();
  const whitelist = useSelector((state) => state.whitelist.whitelist);

  const connectWallet = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        // Metamask is installed
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (error) {
        console.error(error.message);
      }
    } else {
      // Metamask is not installed
      console.log("please install Metamask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
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
        console.error(error.message);
      }
    } else {
      // Metamask is not installed
      console.log("please install Metamask");
    }
  };

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const addWalletListener = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
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

  const handleWhitelistClick = () => {
    setWhitelistModalOpen(true);
  };

  const closeWhitelistModal = () => {
    setWhitelistModalOpen(false);
  };

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
    console.log("Redirecting to Pool Participant");
    navigate("/pool-participant");
    handleClose();
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className=""
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="flex items-end justify-end cursor-pointer">
        <img
          src={clear}
          alt="cross_icon"
          className="w-8 h-8 cursor-pointer"
          onClick={toggleDrawer(anchor, false)}
        />{" "}
      </div>
      <div className="w-[100vw] max-w-[300px]">
        <div className="flex justify-center items-center p-4">
          <div className="flex items-center cursor-pointer justify-center mr-20">
            <img src={Logo} alt="" className="w-10 h-10 relative" />
            <span className="text-sm font-medium text-[#3840CD] absolute top-[68px] left-[125px]">
              BULL RUN
            </span>
          </div>
        </div>
        <ul className="flex flex-col cursor-pointer items-center space-y-12 p-4">
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
        <div className="flex flex-col cursor-pointer items-center space-y-12 p-4 mt-5">
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
      </div>
    </div>
  );

  return (
    <>
      <header className="border-b">
        <div className="flex justify-between m-auto items-center p-3 ">
          {isMobile ? (
            <div className="flex items-center">
              <div className="flex flex-col items-center cursor-pointer">
                <img src={Logo} alt="" className="w-12 h-12 relative" />
                <span className="text-sm font-medium text-[#3840CD] absolute top-[38px] left-[50px]">
                  BULL RUN
                </span>
              </div>
            </div>
          ) : (
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
          )}

          <div className="flex items-center space-x-6">
            {!isMobile && (
              <ul className="flex items-center space-x-6">
                {mockDataToken.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-2 items-center text-sm text-gray-500"
                  >
                    <span>{item.token}:</span>
                    <span className="text-blue-500">
                      {item.value.toFixed(4)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {!isMobile && (
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
            )}
            <div
              className={`flex items-center space-x-4 ${
                isMobile ? "justify-end" : ""
              }`}
            >
              {/* Dropdown 1 */}
              <div className={`relative ${isMobile ? "hidden" : "block"}`}>
                <select
                  value={selectedOption}
                  onChange={handleDropdownChange}
                  className="dropdown-style cursor-pointer"
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
               
              </div>

              {/* Dropdown 2 */}
              <div className={`relative ${isMobile ? "hidden" : "block"}`}>
                <select
                  value={selectedOption2}
                  onChange={handleDropdownChange2}
                  className="dropdown-style cursor-pointer"
                >
                  <option value="Ethereum">Ethereum</option>
                  <option value="Binance">Binance</option>
                  <option value="Avalanche">Avalanche</option>
                  <option value="Fantom">Fantom</option>
                  <option value="Arbitrum">Arbitrum</option>
                </select>
              </div>

              {/* Connect Wallet */}
              <button
                className={`p-2 border-none border-2 rounded-lg bg-blue-500 text-white ${
                  isMobile ? "rounded-full" : ""
                }`}
                onClick={connectWallet}
              >
                {isMobile
                  ? walletAddress && walletAddress.length > 0
                    ? walletAddress.substring(0, 6) +
                      "..." +
                      walletAddress.substring(38)
                    : "Connect"
                  : walletAddress && walletAddress.length > 0
                  ? `Connected: ${walletAddress.substring(
                      0,
                      6
                    )}...${walletAddress.substring(38)}`
                  : "Connect Wallet"}
              </button>

              {/* Hamburger Icon for Mobile */}
              {isMobile && (
                <img
                  src={hamburger}
                  alt="hamburger_menu"
                  className="w-8 h-8 cursor-pointer"
                  onClick={toggleDrawer("right", true)}
                />
              )}
            </div>
          </div>
        </div>

        <div className="w-[80vw] mx-auto">
          <ConnectWalletModal
            open={openModal}
            handleClose={handleClose}
            onPoolCreatorClick={handlePoolCreatorClick}
            onPoolParticipantClick={handlePoolParticipantClick}
          />
        </div>
      </header>

      <WhiteListModal
        open={isWhitelistModalOpen}
        handleClose={closeWhitelistModal}
        title="Whitelisted Items"
        content={
          <ul>
            {whitelist.map((item) => (
              <li key={item._id}>
                <p className="text-white">_id: {item._id}</p>
                <p className="text-white">Pool ID: {item["Pool ID"]}</p>
              </li>
            ))}
          </ul>
        }
      />

      <SwipeableDrawer
        anchor={"right"}
        open={drawerState["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </>
  );
};

export default Topbar;
