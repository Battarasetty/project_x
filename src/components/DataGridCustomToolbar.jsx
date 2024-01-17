import React from "react";
import {
  InputAdornment,
  Typography,
  Button,
  styled,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";
import { filterSearch, ic_search, insert } from "../assets";

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F1F2F5",
  paddingRight: "8px",
  borderRadius: "8px",
  width: "300px",
  [theme.breakpoints.down("sm")]: {
    width: "100%", 
  },
}));

const SearchIconWrapper = styled("div")({
  padding: "8px",
  backgroundColor: "#F1F2F5", // Same background color as the container
  borderRadius: "8px 0 0 8px", // Adjust the border-radius as needed
});

const StyledInputBase = styled("input")(({ theme }) => ({
  border: "none",
  outline: "none",
  padding: "8px",
  backgroundColor: "#F1F2F5", // Same background color as the container
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "100%", 
  },
  borderRadius: "0 8px 8px 0", // Adjust the border-radius as needed
}));

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
  return (
    <GridToolbarContainer>
      <FlexBetween alignItems="center" width="100%">
        <Typography
          sx={{
            color: "#000000",
            fontWeight: 600,
            fontSize: { xs: "15px", sm: "20px" },
          }}
        >
          All Pools
        </Typography>
        <FlexBetween alignItems="center" sx={{ display: "flex", gap: "10px" }}>
          {/* Existing Search TextField */}
          <SearchContainer>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search by Pool" aria-label="search" />
            <img src={filterSearch} alt="" className="w-5 h-5" />
          </SearchContainer>
          {/* <div className="flex items-center gap-2 sm:p-2.5 p-[15px] sm:w-[120px] border-none border-2 rounded-lg bg-blue-500 text-white">
            <img src={insert} alt="Add" className="w-3 h-3" />
            <p className="hidden sm:block">Create Pool</p>
          </div> */}
        </FlexBetween>
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
