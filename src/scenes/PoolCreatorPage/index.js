import React, { useEffect, useState } from 'react';
import SwitchWithLabel from '../../components/SwitchWithLabel';
import HighlightComponentsContainer from '../../components/HighLightComponents/HighlightComponentsContainer';
import { add_pool, bike, blue_circle, eye_x, insert, person, plus_x } from '../../assets';
import { FormControlLabel, Switch } from '@mui/material';
import CircularProgressBar from '../../components/CircularProgressBar';
import AddTokenModal from '../../components/AddTokenModal';

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
    const numericValue = value.replace(/[^0-9.]/g, '');

    // Format the numeric value with a '$' symbol
    const formattedValue = `$${numericValue}`;

    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  const [isAddTokenModalOpen, setIsAddTokenModalOpen] = useState(false);

  // Step 2: Create a function to open the modal
  const openAddTokenModal = () => {
    setIsAddTokenModalOpen(true);
  };

  // Step 3: Attach the function to the "Add Token" button click event
  const handleAddTokenButtonClick = () => {
    openAddTokenModal();
    // Add any additional logic if needed
  };

  return (
    <>
      <div className="flex gap-5">

        {/* Left Side */}
        <div className='flex mt-[60px] flex-col ' style={{ width: '20%', gap: "24px", paddingRight: '20px' }}>
          <div className='flex items-center gap-2' style={{ paddingLeft: "20px" }}>
            <div style={{ position: 'relative' }}>
              <img src={blue_circle} alt="Blue Circle" className="w-10 h-10" />
              <img
                src={bike}
                alt="Bike"
                className="w-8 h-8 absolute" style={{ bottom: "5px", left: "4px" }} />
            </div>
            <h2 className="text-xs font-semibold">Portfolio <br /> Overview</h2>
          </div>
          <div className='flex gap-2 items-center pb-3' style={{ paddingLeft: "20px", borderBottom: '1px solid #F1F2F5' }}>
            <img src={add_pool} alt="Add" className="font-bold w-2.5 h-2.5" />
            <p className="text-[#3840CD] text-xs font-semibold">Create Pool</p>
          </div>
        </div>

        {/* Right Side */}
        <div className='mt-[30px]' style={{ width: '70%' }}>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-3'>
                <img src={person} alt="Person" className="w-5 h-5" />
                <p className='text-[#838A9B] text-[10px]'>Total Portfolio Value</p>
              </div>
              <div className='flex items-center gap-3'>
                <p className='font-bold'>$00.00</p>
                <img src={eye_x} alt="Person" className="w-3 h-3" />
              </div>
            </div>

            {/* SwitchWithLabel component */}
            <div>
              <SwitchWithLabel
                label="Show Charts"
                checked={showHighlights}
                onChange={() => setShowHighlights(!showHighlights)}
                className="ml-4"
              />
            </div>
          </div>

          {/* Charts */}
          <div className='container mt-7'>
            {/* HighlightComponentsContainer */}
            <HighlightComponentsContainer showHighlights={showHighlights} />
          </div>

          {/* Pool Form  */}
          <div className=''>
            <form className='flex flex-col gap-2'>

              <h2 className="text-lg font-normal text-[#5763F3]">Create Your Pool</h2>
              <div className='border-b my-1'></div>

              <div className=''>
                <label className='text-[10px] text-[#838A9B]'>Select Fee Token XBR</label>
                <FormControlLabel
                  labelPlacement="start"
                  control={<Switch color="primary" checked={isEthereumSelected} onChange={handleSwitchChange} />}
                  sx={{ fontSize: '6px', color: "#838A9B" }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* First Row */}
                <div className="mb-4 pb-2 col-span-2 sm:col-span-1">
                  {/* Pool Creation Fee */}
                  <label htmlFor="poolCreationFee" className="block text-xs font-semibold text-[#000000]">
                    Pool Creation Fee*
                  </label>
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
                  <label htmlFor="stakingFee" className="block text-xs font-semibold text-[#000000]">
                    Staking Fee*
                  </label>
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
                  <label htmlFor="initialInvestment" className="block text-xs font-semibold text-[#000000]">
                    Initial Pool Investment*
                  </label>
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
                  <label htmlFor="poolSharingPercentage" className="block text-xs font-semibold text-[#000000]">
                    Pool Sharing in %*
                  </label>
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
                  <label htmlFor="addToken" className="block text-xs font-semibold text-[#000000]">
                    Add Token
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="addToken"
                      name="addToken"
                      placeholder="Search by name or contract address"
                      value={formData.addToken}
                      onChange={handleInputChange}
                      className="w-full text-sm px-4 py-3 mt-2 border bg-[#F1F2F5] rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <div>

                      <button
                        type="button"
                        onClick={handleAddTokenButtonClick}
                        className="absolute flex items-center gap-2 top-[30px] text-xs rounded-lg right-[6px] px-4 py-2 text-[#5763F3] bg-[#ffffff] focus:outline-none"
                      >
                        <img src={add_pool} alt='eye icon' className='w-3 h-3 font-[900]' />
                        Token
                      </button>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col gap-4 items-center justify-center mt-5 mb-10'>
                  <CircularProgressBar percentage={100} />
                  <p className='text-[12px] font-bold'>Pool Percentage Left</p>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
      <AddTokenModal
        open={isAddTokenModalOpen}
        handleClose={() => setIsAddTokenModalOpen(false)}
        onAddToken={() => {
          // Handle logic when adding token (e.g., save data)
          setIsAddTokenModalOpen(false); // Close the modal after handling
        }}
      />
    </>
  );
};

export default PoolCreatorPage;
