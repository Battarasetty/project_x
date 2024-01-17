import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PortfolioOverview from "../../components/PortfolioOverview";
import PortfolioInfo from "../../components/PortfolioInfo";
import PoolFormSection from "../../components/PoolFormSection";
import HighlightComponentsContainer from "../../components/HighLightComponents/HighlightComponentsContainer";
import AddTokenModal from "../../components/AddTokenModal";
import { setShowHighlights } from "../../redux/pool/poolSlice";
import ChartComponent from "../../components/HighLightComponents/ChartComponent";
import TrendingArticle from "../../components/HighLightComponents/TrendingArticle";
import { Box, Typography } from "@mui/material";
import {
  BigChartBox,
  CoinAvatarGroup,
  DataGridCustomToolbar,
  PoolSearchComponent,
  ProgressCircle,
} from "../../components";

import { DataGrid } from "@mui/x-data-grid";
import {
  AVAX,
  BNB,
  DOGE,
  DOT,
  LUNA,
  Polygon,
  SHIBA,
  SOL,
  USDT,
  XRP,
  copy,
  etherum,
  eye_x,
  info,
  info_main,
  minus_x,
  plus_x,
  star,
} from "../../assets";
import { addToWhitelist } from "../../redux/whitelistSlice/whitelistSlice";
import DepositModalComponent from "../../components/DepositModalComponent";
import { useNavigate } from "react-router-dom";
import WithdrawModal from "../../components/WithdrawModal";

const PoolParticipantPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const showHighlights = useSelector((state) => state.poolForm.showHighlights);
  const isPoolFormOpen = useSelector((state) => state.poolForm.isPoolFormOpen);

  const marginTopValue = isPoolFormOpen ? "30px" : "62px";

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const poolAbbreviations = {
    Ethereum: "ETH",
    Binance: "BNB",
    Solana: "SOL",
    Avalanche: "AVAX",
    Xrp: "XRP",
    Tether: "USDT",
  };

  const handleAddToWhitelist = (record) => {
    dispatch(addToWhitelist(record));

    // Show the success message
    setShowSuccessMessage(true);

    // Hide the success message after a certain duration (e.g., 3000ms)
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const [showDepositModal, setShowDepositModal] = useState(false);

  // Function to handle the click on the "+" icon
  const handleDepositClick = (event) => {
    // Stop the propagation of the click event to prevent handleRowClick from triggering
    event.stopPropagation();

    // Your existing logic for handling the "+" icon click
    setShowDepositModal(true);
  };

  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);


  const handleWithdrawClick = (event) => {
    event.stopPropagation();

    setWithdrawModalOpen(true);
  };

  const dummyCoinData = [
    { src: etherum, alt: "etherum", percentage: 55 },
    { src: BNB, alt: "BNB", percentage: 55 },
    { src: SOL, alt: "SOL", percentage: 55 },
    { src: AVAX, alt: "Avax", percentage: 55 },
    { src: XRP, alt: "Xrp", percentage: 55 },
    { src: USDT, alt: "Usdt", percentage: 56 },
    { src: DOT, alt: "Dot", percentage: 2 },
    { src: DOGE, alt: "Doge", percentage: 2 },
    { src: SHIBA, alt: "Shiba", percentage: 2 },
    { src: LUNA, alt: "Luna", percentage: 2 },
  ];

  const dummyData = [
    {
      _id: 1,
      "#": 1,
      "Pool ID": "XBR1084378",
      Pools: <CoinAvatarGroup coinData={dummyCoinData} />,
      Tokens: 10,
      "Token PoolCap": "$384,321,120.12",
      "24 %": "18.7%",
      "7D %": "18.7%",
      "30D %": "18.7%",
      Volume: "$263,282.87",
      Yield: "$23,456.67",
      Action: "Icons",
    },
    {
      _id: 2,
      "#": 2,
      "Pool ID": "XBR1084379",
      Pools: <CoinAvatarGroup coinData={dummyCoinData} />,
      Tokens: 15,
      "Token PoolCap": "$512,456,789.45",
      "24 %": "22.5%",
      "7D %": "22.5%",
      "30D %": "22.5%",
      Volume: "$375,890.23",
      Yield: "$32,145.89",
      Action: "Icons",
    },
    {
      _id: 3,
      "#": 3,
      "Pool ID": "XBR1084380",
      Pools: <CoinAvatarGroup coinData={dummyCoinData} />,
      Tokens: 8,
      "Token PoolCap": "$240,987,654.32",
      "24 %": "15.2%",
      "7D %": "15.2%",
      "30D %": "15.2%",
      Volume: "$182,345.67",
      Yield: "$15,678.90",
      Action: "Icons",
    },
    {
      _id: 4,
      "#": 4,
      "Pool ID": "XBR1084381",
      Pools: <CoinAvatarGroup coinData={dummyCoinData} />,
      Tokens: 12,
      "Token PoolCap": "$643,210,987.65",
      "24 %": "28.3%",
      "7D %": "28.3%",
      "30D %": "28.3%",
      Volume: "$498,765.43",
      Yield: "$45,678.12",
      Action: "Icons",
    },
    {
      _id: 5,
      "#": 5,
      "Pool ID": "XBR1084382",
      Pools: <CoinAvatarGroup coinData={dummyCoinData} />,
      Tokens: 20,
      "Token PoolCap": "$820,123,456.78",
      "24 %": "35.6%",
      "7D %": "35.6%",
      "30D %": "35.6%",
      Volume: "$689,012.34",
      Yield: "$58,901.23",
      Action: "Icons",
    },
    {
      _id: 6,
      "#": 6,
      "Pool ID": "XBR1084383",
      Pools: <CoinAvatarGroup coinData={dummyCoinData} />,
      Tokens: 18,
      "Token PoolCap": "$735,468,912.54",
      "24 %": "31.9%",
      "7D %": "31.9%",
      "30D %": "31.9%",
      Volume: "$567,123.45",
      Yield: "$51,234.56",
      Action: "Icons",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "",
      flex: 0.5,
      renderCell: (params) => (
        <img
          src={star}
          alt=""
          className="w-5 h-5 ml-2 transform cursor-pointer transition-transform hover:scale-110"
          onClick={() => handleAddToWhitelist(params.row)}
        />
      ),
    },
    {
      field: "#",
      headerName: "#",
      flex: 0.5,
    },
    {
      field: "Pool ID",
      headerName: "Pool ID",
      flex: 1,
      headerRender: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {params.title}
          <img src={info} alt="" className="w-5 h-5 ml-2 " />
        </div>
      ),
    },
    {
      field: "Pools",
      headerName: "Pools",
      flex: 1,
      renderCell: (params) => params.row.Pools,
      headerRender: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {params.title}
          <img src={info} alt="" className="w-5 h-5 ml-2 " />
        </div>
      ),
    },
    {
      field: "Tokens",
      headerName: "Tokens",
      flex: 0.5,
      renderCell: (params) => params.row.Tokens,
      headerRender: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {params.title}
          <img src={info} alt="" className="w-5 h-5 ml-2 " />
        </div>
      ),
    },
    {
      field: "Token PoolCap",
      headerName: "Token PoolCap",
      flex: 1,
      renderCell: (params) => params.row["Token PoolCap"],
      headerRender: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {params.title}
          <img src={info} alt="" className="w-5 h-5 " />
        </div>
      ),
    },
    {
      field: "24h %",
      headerName: "24h %",
      flex: 0.5,
      renderCell: (params) => params.row["24 %"],
    },
    {
      field: "7D %",
      headerName: "7D %",
      flex: 0.5,
      renderCell: (params) => params.row["7D %"],
    },
    {
      field: "30D %",
      headerName: "30D %",
      flex: 0.5,
      renderCell: (params) => params.row["30D %"],
    },
    {
      field: "Volume",
      headerName: "Volume",
      flex: 1,
      renderCell: (params) => params.row.Volume,
    },
    {
      field: "Yield",
      headerName: "Yield",
      flex: 1,
      renderCell: (params) => params.row.Yield,
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <div className="flex items-center">
          {/* <div className="border-2 border-gray-300 bg-white p-1 rounded-lg">
            <img src={eye_x} alt="" className="w-3 h-3 " />
          </div> */}
          <div
            className=" ml-2 border-2 border-gray-300 bg-white p-1 rounded-lg cursor-pointer"
            onClick={(event) => handleDepositClick(event)}
          >
            <img src={plus_x} alt="" className="w-3 h-3" />
          </div>
          <div className=" ml-2 border-2 border-gray-300 bg-white p-1 rounded-lg"
            onClick={(event) => handleWithdrawClick(event)}
          >
            <img src={minus_x} alt="" className="w-3 h-3" />
          </div>
        </div>
      ),
    },
  ];

  const allRows = dummyData;

  const handleRowClick = (params) => {
    // Redirect to the details page with the selected pool participant's ID
    navigate(`/pool-participant/${params.row._id}`);
  };



  return (
    <>
      <div className="flex gap-5">
        {/* Left Side */}
        <PortfolioOverview isPoolCreator={false} />

        {/* Right Side */}
        <div className={`mt-[${marginTopValue}]`} style={{ width: "70%" }}>
          <PortfolioInfo isParticipantDetailsPage={false} />
          {/* Charts */}
          <div className="container mt-7">
            <HighlightComponentsContainer
              showHighlights={showHighlights}
              isPoolCreator={false}
            />
          </div>
          {/* Pool Form  */}

          <div className="flex flex-col gap-6 mt-3">
            {/* Table */}
            <div className={showHighlights ? "mt-7" : ""}>
              <Box
                sx={{
                  "& .MuiDataGrid-root": {
                    border: "none",
                    borderRadius: "5rem",
                    cursor: "pointer"
                  },
                  "& .MuiDataGrid-cell": {},
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "white",
                    color: "black",
                  },
                  "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: "white",
                  },
                  "& .MuiDataGrid-footerContainer": {
                    backgroundColor: "white",
                    color: "black",
                    borderTop: "none",
                  },
                  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `#ffedc2 !important`,
                  },
                }}
              >
                <DataGrid
                  loading={false}
                  getRowId={(row) => row._id}
                  rows={allRows}
                  columns={columns}
                  rowCount={dummyData.length}
                  rowsPerPageOptions={[20, 50, 100]}
                  pagination
                  page={page}
                  pageSize={pageSize}
                  paginationMode="server"
                  sortingMode="server"
                  onPageChange={(newPage) => setPage(newPage)}
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  onSortModelChange={(newSortModel) => setSort(...newSortModel)}
                  components={{ Toolbar: DataGridCustomToolbar }}
                  componentsProps={{
                    toolbar: { searchInput, setSearchInput, setSearch },
                  }}
                  onRowClick={handleRowClick}
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
      {/* Render the DepositModalComponent based on the state */}
      <DepositModalComponent
        open={showDepositModal}
        handleClose={() => setShowDepositModal(false)}
      />

      {/* Render your WithdrawModal component */}
      <WithdrawModal
        open={withdrawModalOpen}
        handleClose={() => setWithdrawModalOpen(false)}
      />
    </>
  );
};

export default PoolParticipantPage;
