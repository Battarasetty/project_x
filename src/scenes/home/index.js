import React, { useState } from "react";
import { Box, FormControlLabel, Grid, Switch } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AVAX, BNB, DOGE, DOT, LUNA, SHIBA, SOL, USDT, XRP, etherum, eye_x, ic_search, info, minus_x, plus_x, star } from "../../assets";
import {
  CoinAvatarGroup,
  DataGridCustomToolbar,
  SwitchWithLabel,
} from "../../components";
import HighlightComponentsContainer from "../../components/HighLightComponents/HighlightComponentsContainer";
import { useDispatch } from "react-redux";
import { addToWhitelist } from "../../redux/whitelistSlice/whitelistSlice";
import { Alert, Button } from "@mui/material";

const Home = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showHighlights, setShowHighlights] = useState(true);

  const dispatch = useDispatch();

  const handleAddToWhitelist = (record) => {
    dispatch(addToWhitelist(record));

    // Show the success message
    setShowSuccessMessage(true);

    // Hide the success message after a certain duration (e.g., 3000ms)
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
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
          <div className="border-2 border-gray-300 bg-white p-1 rounded-lg">
            <img src={eye_x} alt="" className="w-3 h-3 " />
          </div>
          <div className=" ml-2 border-2 border-gray-300 bg-white p-1 rounded-lg">
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

  return (
    <div className="flex flex-col container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Alert for success message */}
      <Alert
        severity="success"
        onClose={() => setShowSuccessMessage(false)}
        action={
          <Button
            color="inherit"
            size="small"
            onClick={() => setShowSuccessMessage(false)}
          >
            CLOSE
          </Button>
        }
        sx={{ display: showSuccessMessage ? "block" : "none" }}
      >
        Item added to whitelist!
      </Alert>

      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Good to see you, PAL
      </h1>
      <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <p className="flex-1.5 text-[#838A9B] sm:text-left">
          Yes! You can make money by following a pool creator. Start earning
          your yield today.{" "}
        </p>
        {/* SwitchWithLabel component */}
        <div className="flex flex-1 items-center justify-between">
          <span className="text-blue-500 font-normal underline block sm:inline-block ml-0 sm:ml-4 sm:mt-0">
            Know More
          </span>
          <SwitchWithLabel
            label="Highlights"
            checked={showHighlights}
            onChange={() => setShowHighlights(!showHighlights)}
            className="ml-0 sm:ml-4"
          />
        </div>
      </div>

      {/* Cards */}
      <HighlightComponentsContainer
        showHighlights={showHighlights}
        isPoolCreator={true}
      />

      {/* Fifth Table Component */}
      <div className={showHighlights ? "mt-7" : ""}>
        <Box
          gridColumn="span 8"
          gridRow="span 3"
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
            components={{ Toolbar: DataGridCustomToolbar }}
            componentsProps={{
              toolbar: { searchInput, setSearchInput, setSearch },
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default Home;
