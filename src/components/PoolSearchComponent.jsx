import React, { useState } from "react";
import {
  InputAdornment,
  Typography,
  Button,
  styled,
  Modal,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";
import { add_pool, filterSearch, ic_search, insert, minus_x } from "../assets";
import WithdrawModal from "./WithdrawModal";

const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F1F2F5",
  paddingRight: "8px",
  borderRadius: "8px",
});

const SearchIconWrapper = styled("div")({
  padding: "8px",
  backgroundColor: "#F1F2F5", // Same background color as the container
  borderRadius: "8px 0 0 8px", // Adjust the border-radius as needed
});

const StyledInputBase = styled("input")({
  border: "none",
  outline: "none",
  padding: "8px",
  backgroundColor: "#F1F2F5", // Same background color as the container

  borderRadius: "0 8px 8px 0", // Adjust the border-radius as needed
});

const PoolSearchComponent = ({ searchInput, setSearchInput, setSearch }) => {
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);

  const handleWithdrawClick = () => {
    setWithdrawModalOpen(true);
  };

  const handleCloseWithdrawModal = () => {
    console.log("Closing modal");
    setWithdrawModalOpen(false);
  };

  return (
    <>
      <GridToolbarContainer>
        <FlexBetween alignItems="center" width="100%">
          <Typography
            sx={{ color: "#000000", fontWeight: 600, fontSize: "14px" }}
          >
            XBR random name 1, Pool Assets
          </Typography>
          <FlexBetween
            alignItems="center"
            sx={{ display: "flex", gap: "10px" }}
          >
            {/* Existing Search TextField */}
            <SearchContainer sx={{ position: "relative" }}>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "#ABB0C1" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search by Pool/token"
                aria-label="search"
                sx={{ marginRight: "10px" }}
              />
              <img src={filterSearch} alt="" className="w-5 h-5" />
            </SearchContainer>

            <div className="flex items-center p-2.5 border-none rounded-lg">
              <div className="flex cursor-pointer items-center gap-2 bg-white text-blue-500 px-6 py-2 rounded-l-lg border-t border-b border-l border-blue-500">
                <img src={add_pool} alt="Add" className="w-3 h-3" />
                <p>Deposit</p>
              </div>
              <div
                className="flex cursor-pointer items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-r-lg border-t border-b border-r border-blue-500"
                onClick={handleWithdrawClick} // Call the same function to open the Withdraw modal
              >
                <img src={minus_x} alt="Withdraw" className="w-3 h-3" />
                <p>Withdraw</p>
              </div>
            </div>
          </FlexBetween>
        </FlexBetween>
      </GridToolbarContainer>
      {/* Render your WithdrawModal component */}
      <WithdrawModal
        open={withdrawModalOpen}
        handleClose={handleCloseWithdrawModal}
      />
    </>
  );
};

export default PoolSearchComponent;
