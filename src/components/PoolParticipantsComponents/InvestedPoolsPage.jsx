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
import { Box, Grid, Typography } from "@mui/material";
import {
  CoinAvatarGroup,
  CustomInvestedBox,
  DataGridCustomToolbar,
  PoolSearchComponent,
  ProgressCircle,
  SwitchWithLabel,
  VolumeLeaderComponent,
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
  person,
  pinned,
  plus_x,
  star,
  unpinned,
} from "../../assets";
import { addToWhitelist } from "../../redux/whitelistSlice/whitelistSlice";
import DepositModalComponent from "../../components/DepositModalComponent";
import { Link, useNavigate } from "react-router-dom";

const InvestedPoolsPage = () => {
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
  const handleDepositClick = () => {
    setShowDepositModal(true);
  };

  const dummyCoinData = [
    { src: etherum, alt: "etherum", percentage: 15 },
    { src: BNB, alt: "BNB", percentage: 15 },
    { src: SOL, alt: "SOL", percentage: 15 },
    { src: AVAX, alt: "Avax", percentage: 15 },
    { src: XRP, alt: "Xrp", percentage: 15 },
    { src: USDT, alt: "Usdt", percentage: 15 },
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
          <span>{params.title}</span>
          <img src={info} alt="Info" className="w-5 h-5 ml-2" />
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
          <div className=" ml-2 border-2 border-gray-300 bg-white p-1 rounded-lg cursor-pointer">
            <img src={plus_x} alt="" className="w-3 h-3" />
          </div>
          <div className=" ml-2 border-2 border-gray-300 bg-white p-1 rounded-lg">
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

  const investedBoxData = [
    { id: 1, name: "XBR random name1", value: "$32,874.00", imageSrc: pinned },
    {
      id: 2,
      name: "XBR random name2",
      value: "$27,078.00",
      imageSrc: unpinned,
    },
    {
      id: 3,
      name: "XBR random name3",
      value: "$2457,078.00",
      imageSrc: unpinned,
    },
    {
      id: 4,
      name: "XBR random name4",
      value: "$2337,078.00",
      imageSrc: unpinned,
    },
  ];

  const handleBoxClick = (id) => {
    navigate(`/participant/${id}`);
  };

  const poolDataArray = [
    {
      title: "Highest Volume Pool",
      coinData: dummyCoinData,
      coinLabels: "ETH-BNB-SOL-AVAX-XRP-USDT-DOT-DOGE-SHIBA-LUNA",
      apy: "225.01%",
      volume: "$634,928.98",
      totalPoolValue: "$235.03m",
      btnText: "Let's Earn",
    },
    {
      title: "Lowest Performing Pool",
      coinData: dummyCoinData,
      coinLabels: "ETH-BNB-SOL-AVAX-XRP-USDT-DOT-DOGE-SHIBA-LUNA",
      apy: "-45.34%",
      volume: "$634,928.98",
      totalPoolValue: "$235.03m",
      btnText: "View Details",
    },
  ];

  const [isGridVisible, setIsGridVisible] = useState(false);

  const handleSwitchChange = () => {
    setIsGridVisible((prev) => !prev);
  };

  return (
    <>
      <div className="flex gap-7">
        {/* Left Side */}
        <div className="flex flex-col gap-4" style={{ width: "18%" }}>
          <PortfolioOverview isPoolCreator={false} />
          <div className="flex flex-col gap-2 ml-5">
            <div className="mb-4 border-b border-[#D3D6E3] pb-2">
              <h1 className="text-xs font-bold mb-2">Invested Pools (4)</h1>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {investedBoxData.map((box) => (
                <Link to={`/participant/${box.id}`} key={box.id}>
                  <CustomInvestedBox
                    name={box.name}
                    value={box.value}
                    imageSrc={box.imageSrc}
                    onClick={() => handleBoxClick(box.id)}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className={`mt-[${marginTopValue}]`} style={{ width: "70%" }}>
          {/* <PortfolioInfo
            isParticipantDetailsPage={false}
            totalValue="$79,283.93"
            twentyFourHourChange="12,540.45"
          /> */}
          {/* Charts */}
          {/* <div className="container mt-7">
            <HighlightComponentsContainer
              showHighlights={showHighlights}
              isPoolCreator={false}
            />
          </div> */}
          <div className="flex items-center justify-between mt-10 mb-6">
            <div className="">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <img src={person} alt="Person" className="w-5 h-5" />
                  <p className="text-[#838A9B] text-[10px]">
                    Total Portfolio Value
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-bold">$79,283.93</p>
                  <img src={eye_x} alt="Person" className="w-3 h-3" />
                </div>
              </div>

              {/* Additional paragraph for 24h change */}
              <p className="text-green-500 text-[10px]">+ $12,540.45 (24h)</p>
            </div>
            <SwitchWithLabel
              label="Show Grid"
              checked={isGridVisible}
              onChange={handleSwitchChange}
              labelPlacement="start"
            />
          </div>

          <div className="flex items-center gap-4">
            <div
              className="flex-shrink-0 md:w-[15%] shadow p-2 bg-white rounded-lg"
              style={{ boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.09)" }}
            >
              <div className="text-left">
                <p className="text-[10px] mb-2 text-[#838A9B] font-semibold">
                  All-time profit
                </p>
                <div className="text-[#71C489] text-[18px] mb-2 font-semibold">
                  + $59,208.02
                </div>
                <div className="text-[#71C489] text-[10px] flex items-center gap-1">
                  <img src={Polygon} alt="arrow-icon-up" className="w-2 h-2" />
                  <span>01.5%</span>
                </div>
              </div>
            </div>
            <div
              className="flex-shrink-0 md:w-[15%] shadow p-2 bg-white rounded-lg"
              style={{ boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.09)" }}
            >
              <div className="text-left">
                <p className="text-[10px] mb-2 text-[#838A9B] font-semibold">
                  XRB random name1
                </p>
                <div className="text-[18px] mb-2 font-semibold">32,874.02</div>
                <div className="flex items-center justify-between">
                  <div className="text-[#71C489] text-[10px]">+ $1,208.02</div>
                  <div className="text-[#71C489] text-[10px] flex items-center gap-1">
                    <img
                      src={Polygon}
                      alt="arrow-icon-up"
                      className="w-2 h-2"
                    />
                    <span>01.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isGridVisible && (
            <Grid container spacing={2} sx={{ marginTop: "5px" }}>
              {/* ChartComponent */}
              <Grid item xs={12} md={7}>
                <ChartComponent />
              </Grid>

              <Grid item xs={12} md={4} style={{ display: "flex", gap: "5px" }}>
                {poolDataArray.map((poolData, index) => (
                  <VolumeLeaderComponent key={index} poolData={poolData} />
                ))}
              </Grid>
            </Grid>
          )}

          <div className="flex flex-col gap-6 mt-3">
            {/* Table */}
            <div className={showHighlights ? "mt-7" : ""}>
              <Box
                sx={{
                  "& .MuiDataGrid-root": {
                    border: "none",
                    borderRadius: "5rem",
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
                  components={{ Toolbar: PoolSearchComponent }}
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
    </>
  );
};

export default InvestedPoolsPage;
