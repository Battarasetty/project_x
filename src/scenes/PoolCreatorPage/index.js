import React, { useEffect, useState } from "react";
import SwitchWithLabel from "../../components/SwitchWithLabel";
import HighlightComponentsContainer from "../../components/HighLightComponents/HighlightComponentsContainer";
import {
  add_pool,
  bike,
  blue_circle,
  eye_x,
  insert,
  person,
  plus_x,
} from "../../assets";
import { FormControlLabel, Switch } from "@mui/material";
import CircularProgressBar from "../../components/CircularProgressBar";
import AddTokenModal from "../../components/AddTokenModal";
import PortfolioOverview from "../../components/PortfolioOverview";
import PortfolioInfo from "../../components/PortfolioInfo";
import PoolFormSection from "../../components/PoolFormSection";

const PoolCreatorPage = () => {
  const [showHighlights, setShowHighlights] = useState(false);
  const [isEthereumSelected, setIsEthereumSelected] = useState(false);

  const [formData, setFormData] = useState({
    poolCreationFee: "$100",
    stakingFee: "$5",
    initialInvestment: "$100.00",
    poolSharingPercentage: "1% - 49%",
    addToken: "",
  });

  const handleSwitchChange = () => {
    setIsEthereumSelected((prevIsXbrSelected) => !prevIsXbrSelected);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/[^0-9.]/g, "");

    // Format the numeric value with a '$' symbol
    const formattedValue = `$${numericValue}`;

    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  const [isAddTokenModalOpen, setIsAddTokenModalOpen] = useState(false);
  const [poolPercentageLeft, setPoolPercentageLeft] = useState(100);
  // console.log(poolPercentageLeft)

  const [tokenValue, setTokenValue] = useState();
  const [tokenDetails, setTokenDetails] = useState({});

  console.log(tokenDetails);

  // Step 2: Create a function to open the modal
  const openAddTokenModal = () => {
    setIsAddTokenModalOpen(true);
  };

  // Step 3: Attach the function to the "Add Token" button click event
  const handleAddTokenButtonClick = () => {
    openAddTokenModal();
    // Add any additional logic if needed
  };

  const handleAddToken = (enteredValue, selectedToken, poolPercentageLeft) => {
    // Create a new entry with the token details
    const newTokenEntry = {
      enteredValue,
      selectedToken,
      poolPercentageLeft,
    };

    // Update the token history
    setTokenHistory((prevHistory) => [...prevHistory, newTokenEntry]);

    // Update other state values as needed
    setTokenDetails(selectedToken);
    setTokenValue(enteredValue);
    setPoolPercentageLeft(poolPercentageLeft);
    setIsAddTokenModalOpen(false);
  };

  const [tokenHistory, setTokenHistory] = useState([]);

  console.log(tokenHistory);

  const isApproveButtonDisabled = poolPercentageLeft > 0;

  return (
    <>
      <div className="flex gap-5">
        {/* Left Side */}
        <PortfolioOverview />

        {/* Right Side */}
        <div className="mt-[30px]" style={{ width: "70%" }}>
          <PortfolioInfo
            showHighlights={showHighlights}
            setShowHighlights={setShowHighlights}
          />
          {/* Charts */}
          <div className="container mt-7">
            {/* HighlightComponentsContainer */}
            <HighlightComponentsContainer showHighlights={showHighlights} />
          </div>

          {/* Pool Form  */}
          <PoolFormSection
            showHighlights={showHighlights}
            setShowHighlights={setShowHighlights}
            handleSwitchChange={handleSwitchChange}
            formData={formData}
            handleInputChange={handleInputChange}
            isEthereumSelected={isEthereumSelected}
            openAddTokenModal={openAddTokenModal}
            poolPercentageLeft={poolPercentageLeft}
            tokenHistory={tokenHistory}
            isApproveButtonDisabled={isApproveButtonDisabled}
            setTokenHistory={setTokenHistory}
            setTokenDetails={setTokenDetails}
            setTokenValue={setTokenValue}
            setPoolPercentageLeft={setPoolPercentageLeft}
          />{" "}
        </div>

      </div>
      <AddTokenModal
        open={isAddTokenModalOpen}
        handleClose={() => setIsAddTokenModalOpen(false)}
        onAddToken={handleAddToken}
        initialPoolPercentage={poolPercentageLeft}
      />
    </>
  );
};

export default PoolCreatorPage;
