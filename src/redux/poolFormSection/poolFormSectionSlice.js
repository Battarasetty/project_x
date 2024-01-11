import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEthereumSelected: false,
  formData: {
    poolCreationFee: "$100",
    stakingFee: "$5",
    initialInvestment: "$100.00",
    poolSharingPercentage: "1% - 49%",
    addToken: "",
  },
  isAddTokenModalOpen: false,
  poolPercentageLeft: 100,
  tokenValue: null,
  tokenDetails: {},
  tokenHistory: [],
  isApproveButtonDisabled: true,
  showHighlights: false,
};

const poolFormSection = createSlice({
  name: "poolForm",
  initialState,
  reducers: {
    setSwitchValue: (state, action) => {
      state.isEthereumSelected = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    setIsAddTokenModalOpen: (state, action) => {
      state.isAddTokenModalOpen = action.payload;
    },
    setPoolPercentageLeft: (state, action) => {
      state.poolPercentageLeft = action.payload;
    },
    setTokenValue: (state, action) => {
      state.tokenValue = action.payload;
    },
    setTokenDetails: (state, action) => {
      state.tokenDetails = action.payload;
    },
    setTokenHistory: (state, action) => {
      state.tokenHistory = action.payload;
    },
    setIsApproveButtonDisabled: (state, action) => {
      state.isApproveButtonDisabled = action.payload;
    },
    setShowHighlights: (state, action) => {
      state.showHighlights = action.payload;
    },
    setIsPoolFormOpen: (state, action) => {
      state.isPoolFormOpen = action.payload;
    },
  },
});

export const {
  setSwitchValue,
  setFormData,
  setIsAddTokenModalOpen,
  setPoolPercentageLeft,
  setTokenValue,
  setTokenDetails,
  setTokenHistory,
  setIsApproveButtonDisabled,
  setShowHighlights,
  setIsPoolFormOpen,
} = poolFormSection.actions;

export default poolFormSection.reducer;
