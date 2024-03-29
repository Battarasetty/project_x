import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSwitchValue,
  setFormData,
  setIsAddTokenModalOpen,
  setTokenHistory,
  setTokenDetails,
  setTokenValue,
  setPoolPercentageLeft,
  setIsApproveButtonDisabled,
  setPoolCreatorOverviewData,
} from "../redux/poolFormSection/poolFormSectionSlice";
import CircularProgressBar from "./CircularProgressBar";
import AddTokenModal from "./AddTokenModal";
import { FormControlLabel, Switch } from "@mui/material";
import { add_pool, filterSearch, ic_search, info } from "../assets";
import { setIsPoolFormOpen } from "../redux/poolFormSection/poolFormSectionSlice";
import SwitchWithLabel from "./SwitchWithLabel";
import PoolFormSectionProgressBar from "./PoolFormSectionProgressBar";

const PoolFormSection = () => {
  const dispatch = useDispatch();
  const isEthereumSelected = useSelector(
    (state) => state.poolForm.isEthereumSelected
  );
  const formData = useSelector((state) => state.poolForm.formData);
  const poolPercentageLeft = useSelector(
    (state) => state.poolForm.poolPercentageLeft
  );
  // console.log(first)
  const [isApproveButtonDisabled, setIsApproveButtonDisabled] = useState(true);
  const [isDepositButtonDisabled, setIsDepositButtonDisabled] = useState(true);

  const [circularProgressBarColor, setCircularProgressBarColor] = useState("");
  // console.log(circularProgressBarColor);
  // console.log(poolPercentageLeft);
  const tokenHistory = useSelector((state) => state.poolForm.tokenHistory);
  // console.log(first);

  useEffect(() => {
    console.log("Updated tokenHistory:", tokenHistory);
  }, [tokenHistory]);

  const latestTokenEntry =
    tokenHistory.length > 0 ? tokenHistory[tokenHistory.length - 1] : null;

  // Check if the latestTokenEntry is not null and has the necessary properties
  const enteredValue = latestTokenEntry?.enteredValue ?? null;
  const selectedToken = latestTokenEntry?.selectedToken ?? null;

  const handleSwitchChange = () => {
    dispatch(setSwitchValue(!isEthereumSelected));
  };

  const tokenColors = {
    ETH: "green",
    BNB: "blue",
    SOL: "red",
    AVAX: "purple",
    XRP: "orange",
    USDT: "pink",
  };
  // console.log(tokenColors[circularProgressBarColor]);

  useEffect(() => {
    // Check poolPercentageLeft and set the initial state of buttons
    setIsApproveButtonDisabled(poolPercentageLeft > 0);
    setIsDepositButtonDisabled(true);
  }, [poolPercentageLeft]);

  const handleApproveClick = () => {
    // Your logic for handling the approve click goes here
    // For example, you might want to disable the approve button and enable the deposit button
    setIsApproveButtonDisabled(true);
    setIsDepositButtonDisabled(false);
  };

  const handleDepositClick = () => {
    dispatch(setIsPoolFormOpen(false));
    dispatch(setPoolCreatorOverviewData(true));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/[^0-9.]/g, "");

    // Format the numeric value with a '$' symbol
    const formattedValue = `$${numericValue}`;

    dispatch(setFormData({ ...formData, [name]: formattedValue }));
  };

  const openAddTokenModal = () => {
    dispatch(setIsAddTokenModalOpen(true));
  };

  const [tokenAllocations, setTokenAllocations] = useState([]);
  console.log(tokenAllocations)

  const handleAddToken = (enteredValue, selectedToken, poolPercentageLeft) => {
    console.log(tokenHistory);
    // Check if the token already exists in tokenHistory
    const existingTokenIndex = tokenHistory.findIndex(
      (entry) => entry.selectedToken.name === selectedToken.name
    );

    if (existingTokenIndex !== -1) {
      // Update the existing entry if the token is found
      const updatedTokenHistory = [...tokenHistory];
      updatedTokenHistory[existingTokenIndex] = {
        ...updatedTokenHistory[existingTokenIndex],
        enteredValue:
          parseFloat(updatedTokenHistory[existingTokenIndex].enteredValue) +
          parseFloat(enteredValue),
        poolPercentageLeft: poolPercentageLeft,
      };

      dispatch(setTokenHistory(updatedTokenHistory));
    } else {
      // Add a new entry if the token is not found
      const newTokenEntry = {
        enteredValue,
        selectedToken,
        poolPercentageLeft,
      };

      dispatch(setTokenHistory([...tokenHistory, newTokenEntry]));
    }

    dispatch(setTokenDetails(selectedToken));
    dispatch(setTokenValue(enteredValue));
    dispatch(setPoolPercentageLeft(poolPercentageLeft));
    dispatch(setIsAddTokenModalOpen(false));

    const color = selectedToken.name;
    setCircularProgressBarColor(color);
  };

  // const handleApproveClick = () => {
  //   dispatch(setIsApproveButtonDisabled(true));

  //   setTimeout(() => {
  //     dispatch(setIsApproveButtonDisabled(false));
  //   }, 5000);
  // };

  return (
    <>
      <div className="">
        <form className="flex flex-col gap-2">
          <h2 className="text-lg font-normal text-[#5763F3]">
            Create Your Pool
          </h2>
          <div className="border-b my-1"></div>

          <div className="flex items-center mb-4 mt-2">
            <div className="block text-[10px] text-[#838A9B]">
              Select Fee Token XBR
            </div>
            <SwitchWithLabel />

            {/* <FormControlLabel
                    labelPlacement="start"
                    control={
                      <Switch
                        sx={{
                          transform: "scale(0.6)", // Adjust the scale factor as needed
                          color: "#838A9B",
                          marginTop: "12px",
                        }}
                      />
                    }
                  /> */}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* First Row */}
            <div className="mb-4 pb-2 col-span-2 sm:col-span-1">
              {/* Pool Creation Fee */}
              <div className="flex items-center gap-1">
                <label
                  htmlFor="poolCreationFee"
                  className="block text-xs font-semibold text-[#000000]"
                >
                  Pool Creation Fee*
                </label>
                <img src={info} alt="" className="w-2 h-2" />
              </div>

              <input
                type="text"
                id="poolCreationFee"
                name="poolCreationFee"
                value={formData.poolCreationFee}
                onChange={handleInputChange}
                className="w-full font-semibold px-4 py-2 mt-2 border bg-[#F1F2F5] rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4 pb-2 col-span-2 sm:col-span-1">
              {/* Staking Fee */}
              <div className="flex items-center gap-1">
                <label
                  htmlFor="stakingFee"
                  className="block text-xs font-semibold text-[#000000]"
                >
                  Staking Fee*
                </label>
                <img src={info} alt="" className="w-2 h-2" />
              </div>
              <input
                type="text"
                value={formData.stakingFee}
                id="stakingFee"
                name="stakingFee"
                onChange={handleInputChange}
                className="w-full font-semibold  px-4 py-2 mt-2 border bg-[#F1F2F5] rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Second Row */}
            <div className="mb-4 pb-2 col-span-2 sm:col-span-1">
              {/* Initial Pool Investment */}
              <div className="flex items-center gap-1">
                <label
                  htmlFor="initialInvestment"
                  className="block text-xs font-semibold text-[#000000]"
                >
                  Initial Pool Investment*
                </label>
                <img src={info} alt="" className="w-2 h-2" />
              </div>
              <input
                type="text"
                value={formData.initialInvestment}
                id="initialInvestment"
                name="initialInvestment"
                onChange={handleInputChange}
                className="w-full font-semibold px-4 py-2 mt-2 border bg-[#F1F2F5] rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4 pb-2 col-span-2 sm:col-span-1">
              {/* Pool Sharing in % */}
              <div className="flex items-center gap-1">
                <label
                  htmlFor="poolSharingPercentage"
                  className="block text-xs font-semibold text-[#000000]"
                >
                  Pool Sharing in %*
                </label>
                <img src={info} alt="" className="w-2 h-2" />
              </div>
              <input
                type="text"
                id="poolSharingPercentage"
                name="poolSharingPercentage"
                value={formData.poolSharingPercentage}
                onChange={handleInputChange}
                className="w-full font-semibold  px-4 py-2 mt-2 border bg-[#F1F2F5] rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4 pb-2 col-span-2 sm:col-span-1 relative">
              {/* Add Token */}
              <div className="flex items-center gap-1">
                <label
                  htmlFor="addToken"
                  className="block text-xs font-semibold text-[#000000]"
                >
                  Add Token
                </label>
                <img src={info} alt="" className="w-2 h-2" />
              </div>
              <div className="flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    id="addToken"
                    name="addToken"
                    placeholder="Search by name or contract address"
                    value={formData.addToken}
                    onChange={handleInputChange}
                    className="w-[520px] text-sm px-4 py-3 mt-2 border bg-[#F1F2F5] rounded-lg focus:outline-none focus:border-blue-500 pl-8"
                  />
                  <img
                    src={ic_search}
                    alt=""
                    className="absolute left-2 bottom-[2px] transform -translate-y-1/2 w-5 h-5"
                  />
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => openAddTokenModal(poolPercentageLeft)}
                    className="absolute flex items-center gap-2 top-[30px] text-xs rounded-lg right-[6px] px-4 py-2 text-[#5763F3] bg-[#ffffff] focus:outline-none"
                  >
                    <img
                      src={add_pool}
                      alt="eye icon"
                      className="w-3 h-3 font-[900]"
                    />
                    Token
                  </button>
                </div>
              </div>

              <div className="mt-5">
                <ul>
                  {tokenHistory.map((entry, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between border-b pb-2 mb-2"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={entry.selectedToken.image}
                          alt=""
                          className="w-6 h-6"
                        />
                        <p className="text-[14px] font-semibold">
                          {entry.selectedToken.fullName}
                        </p>
                        <p className="text-[14px]">
                          {entry.selectedToken.name}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex justify-end">
                          <span className="font-semibold">
                            {entry.enteredValue}
                          </span>
                          <span className="font-semibold">%</span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <span className="ml-2 text-[8px]">
                            ${entry.enteredValue.toFixed(2)}{" "}
                          </span>
                          <span className="text-[8px]">USD</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center mt-5 mb-10">
              {/* <CircularProgressBar
                percentage={poolPercentageLeft}
                color={circularProgressBarColor}
              /> */}
              <PoolFormSectionProgressBar
                tokenHistory={tokenHistory}
                poolPercentageLeftFromRedux={poolPercentageLeft}
              />

              {/* <CircularProgressBar
                percentage={
                  latestTokenEntry?.poolPercentageLeft ?? poolPercentageLeft
                }
                enteredValue={enteredValue}
                selectedToken={selectedToken}
              /> */}

              <div className="flex items-center gap-2 text-[12px] font-bold">
                Pool Percentage Left
                <img src={info} alt="" className="w-2 h-2" />
              </div>
            </div>

            <div className="" style={{ width: "69.3vw" }}>
              <div className="mb-10 px-4 pb-10 pt-5 bg-[#F1F2F5] rounded-md  shadow">
                <p className="text-[10px] font-normal text-[#838A9B] mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>

              <div className="flex items-center gap-10 justify-center mb-10">
                <button
                  type="button"
                  className={`p-2 rounded-lg ${
                    isApproveButtonDisabled
                      ? "bg-[#F1F2F5] text-black cursor-not-allowed"
                      : "bg-blue-500 text-white"
                  }`}
                  style={{ width: "20vw" }}
                  onClick={handleApproveClick}
                  disabled={isApproveButtonDisabled}
                >
                  Approve
                </button>
                <button
                  className={`p-2 rounded-lg ${
                    isDepositButtonDisabled
                      ? "bg-[#F1F2F5] text-black cursor-not-allowed"
                      : "bg-blue-500 text-white"
                  }`}
                  style={{ width: "20vw" }}
                  onClick={handleDepositClick}
                  disabled={isDepositButtonDisabled}
                >
                  Deposit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <AddTokenModal
        open={useSelector((state) => state.poolForm.isAddTokenModalOpen)}
        handleClose={() => dispatch(setIsAddTokenModalOpen(false))}
        onAddToken={handleAddToken}
        poolPercentageValue={poolPercentageLeft}
        tokenAllocations={tokenAllocations}
      />
    </>
  );
};

export default PoolFormSection;
