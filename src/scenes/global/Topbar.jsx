import React, { useEffect, useRef, useState } from "react";
import {
  Logo,
  Favorite,
  pie,
  Notification_bold,
  Notification,
  hamburger,
  clear,
  Arrow,
  Arrow_down,
} from "../../assets";
import { mockDataToken } from "../../constants/Data";
import ConnectWalletModal from "../../components/ConnectWalletModal";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { WhiteListModal } from "../../components";
import { SwipeableDrawer } from "@mui/material";

const Topbar = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [hasNotifications, setHasNotifications] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Pool Participants");
  const [arrowRotation, setArrowRotation] = useState(0);
  const [arrowRotation2, setArrowRotation2] = useState(0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isWhitelistModalOpen, setWhitelistModalOpen] = useState(false);
  const [drawerState, setDrawerState] = useState({
    left: false,
  });

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target)
      ) {
        setDropdownOpen(false);
        setArrowRotation(0);

        setDropdownOpen2(false);
        setArrowRotation2(0);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen, isDropdownOpen2]);

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

        // Set the wallet address
        setWalletAddress(accounts[0]);

        // Trigger handleConnectWallet function
        handleConnectWallet();

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
    setDropdownOpen(!isDropdownOpen);
    setArrowRotation(isDropdownOpen ? 0 : 180); // Rotate 180 degrees when opening, reset to 0 when closing
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    setArrowRotation(0);

    // Redirect based on the selected option
    if (option === "Pool Creator") {
      navigate("/pool-creator");
    } else if (option === "Pool Participants") {
      navigate("/pool-participant");
    }
  };

  const [selectedOption2, setSelectedOption2] = useState("Ethereum"); // Make sure you have this state variable
  const options2 = ["Ethereum", "Binance", "Avalanche", "Fantom", "Arbitrum"]; // Make sure you have this array

  const handleDropdownChange2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
    setArrowRotation2(isDropdownOpen2 ? 0 : 180);
  };

  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
    setDropdownOpen2(false);
    setArrowRotation2(0);
  };

  const options = ["Pool Participants", "Pool Creator"];

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
                <div className="flex items-center space-x-2 hover:scale-110 cursor-pointer">
                  <img src={pie} alt="Pie Icon" className="w-4 h-4" />
                  <p className="text-sm">Portfolio</p>
                </div>
                <div className="relative hover:scale-110 cursor-pointer">
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
              <div
                ref={dropdownRef}
                className={`relative ${isMobile ? "hidden" : "block"}`}
              >
                <div
                  className="flex items-center justify-between gap-[4px] cursor-pointer"
                  onClick={handleDropdownChange}
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "6px", // Increase padding for better spacing
                    borderRadius: "10px",
                    border: `2px solid ${
                      isDropdownOpen ? "#1890ff" : "#808080"
                    }`, // Blue border color when open, grey when closed
                    width: "170px", // Set a fixed width for the container
                    boxShadow: isDropdownOpen
                      ? "0px 4px 8px rgba(0, 0, 0, 0.1)"
                      : "none", // Add box shadow when open
                  }}
                >
                  <div className="dropdown-style cursor-pointer">
                    {selectedOption}
                  </div>
                  <img
                    src={Arrow_down}
                    alt="arrow_down"
                    className="w-3 h-3"
                    style={{
                      fill: isDropdownOpen ? "#1890ff" : "#808080", // Set fill color dynamically
                      transform: `rotate(${arrowRotation}deg)`, // Rotate the arrow
                      transition: "transform 0.3s ease", // Add transition for smoother rotation
                    }}
                  />
                </div>

                {isDropdownOpen && (
                  <div className="absolute w-[170px] top-full left-0 z-10 bg-white border border-gray-300 shadow-md max-h-36 overflow-y-auto mt-2 rounded-md">
                    {selectedOption === "Pool Participants" ? (
                      <div
                        onClick={() => handleOptionClick("Pool Creator")}
                        className="p-3 cursor-pointer transition-all hover:bg-gray-100"
                      >
                        Pool Creator
                      </div>
                    ) : (
                      <div
                        onClick={() => handleOptionClick("Pool Participants")}
                        className="p-3 cursor-pointer transition-all hover:bg-gray-100"
                      >
                        Pool Participant
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Dropdown 2 */}
              <div
                ref={dropdownRef2}
                className={`relative ${isMobile ? "hidden" : "block"}`}
              >
                <div
                  className="flex items-center justify-between gap-[4px] cursor-pointer"
                  onClick={handleDropdownChange2}
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "6px", // Increase padding for better spacing
                    borderRadius: "10px",
                    border: `2px solid ${
                      isDropdownOpen2 ? "#1890ff" : "#808080"
                    }`, // Blue border color when open, grey when closed
                    boxShadow: isDropdownOpen2
                      ? "0px 4px 8px rgba(0, 0, 0, 0.1)"
                      : "none", // Add box shadow when open
                    width: "125px", // Set a fixed width for the container
                  }}
                >
                  <div className="dropdown-style cursor-pointer">
                    {selectedOption2}
                  </div>
                  <img
                    src={Arrow_down}
                    alt="arrow_down"
                    className={`w-3 h-3 ${
                      isDropdownOpen2 ? "text-blue-500" : "text-gray-500"
                    }`}
                    style={{
                      fill: isDropdownOpen2 ? "#1890ff" : "#808080",
                      transform: `rotate(${arrowRotation2}deg)`,
                      transition: "transform 0.3s ease", // Add transition for smoother rotation
                    }}
                  />{" "}
                </div>

                {isDropdownOpen2 && (
                  <div className="absolute w-[170px] top-full left-0 z-10 bg-white border border-gray-300 shadow-md max-h-36 overflow-y-auto mt-2 rounded-md">
                    {options2.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => handleOptionClick2(option)}
                        className="p-3 cursor-pointer transition-all hover:bg-gray-100"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
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
