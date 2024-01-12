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
  Polygon,
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

const PoolCreatorPage = () => {
  const dispatch = useDispatch();

  const showHighlights = useSelector((state) => state.pool.showHighlights);
  const isPoolFormOpen = useSelector((state) => state.pool.isPoolFormOpen);

  const marginTopValue = isPoolFormOpen ? "30px" : "62px";

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const poolAbbreviations = {
    Ethereum: "ETH",
    Binance: "BNB",
    Solana: "SOL",
    Avalanche: "AVAX",
    Xrp: "XRP",
    Tether: "USDT",
  };

  const dummyData = [
    {
      _id: 1,
      "#": 1,
      Pools: {
        name: "Ethereum",
        action: (
          <div>
            <img
              src={etherum}
              alt=""
              className="w-5 h-5 ml-2 transform cursor-pointer transition-transform hover:scale-110"
            />
          </div>
        ),
      },
      Price: "$12,120.12",
      "24 %": "18.7%",
      "7D %": "18.7%",
      "30D %": "18.7%",
      Holdings: "$3,282.87",
      "ETH Holdings": 1.2,
      "Avg-Buy Price": "$2305.67",
      Yield: "$282.87",
      "Yield Percentage": "0.15%",
      Allocation: "30%",
    },
    {
      _id: 2,
      "#": 2,
      Pools: {
        name: "Binance",
        action: (
          <div>
            <img
              src={BNB}
              alt=""
              className="w-5 h-5 ml-2 transform cursor-pointer transition-transform hover:scale-110"
            />
          </div>
        ),
      },
      Price: "$2,120.12",
      "24 %": "18.7%",
      "7D %": "18.7%",
      "30D %": "18.7%",
      Holdings: "$3,282.87",
      "ETH Holdings": 1.5,
      "Avg-Buy Price": "$2305.67",
      Yield: "$389.78",
      "Yield Percentage": "0.20%",
      Allocation: "15%",
    },
    {
      _id: 3,
      "#": 3,
      Pools: {
        name: "Solana",
        action: (
          <div>
            <img
              src={SOL}
              alt=""
              className="w-5 h-5 ml-2 transform cursor-pointer transition-transform hover:scale-110"
            />
          </div>
        ),
      },
      Price: "$107.09",
      "24 %": "24.36%",
      "7D %": "18.7%",
      "30D %": "18.7%",
      Holdings: "$3,282.87",
      "ETH Holdings": 1.8,
      "Avg-Buy Price": "$2305.67",
      Yield: "$456.95",
      "Yield Percentage": "0.25%",
      Allocation: "38%",
    },
    {
      _id: 4,
      "#": 4,
      Pools: {
        name: "Avalanche",
        action: (
          <div>
            <img
              src={AVAX}
              alt=""
              className="w-5 h-5 ml-2 transform cursor-pointer transition-transform hover:scale-110"
            />
          </div>
        ),
      },
      Price: "$107.09",
      "24 %": "24.36%",
      "7D %": "18.7%",
      "30D %": "18.7%",
      Holdings: "$3,282.87",
      "ETH Holdings": 1.8,
      "Avg-Buy Price": "$2305.67",
      Yield: "$456.95",
      "Yield Percentage": "0.25%",
      Allocation: "38%",
    },
    {
      _id: 5,
      "#": 5,
      Pools: {
        name: "Xrp",
        action: (
          <div>
            <img
              src={XRP}
              alt=""
              className="w-5 h-5 ml-2 transform cursor-pointer transition-transform hover:scale-110"
            />
          </div>
        ),
      },
      Price: "$107.09",
      "24 %": "24.36%",
      "7D %": "18.7%",
      "30D %": "18.7%",
      Holdings: "$3,282.87",
      "ETH Holdings": 1.8,
      "Avg-Buy Price": "$2305.67",
      Yield: "$456.95",
      "Yield Percentage": "0.25%",
      Allocation: "38%",
    },
    {
      _id: 6,
      "#": 6,
      Pools: {
        name: "Tether",
        action: (
          <div>
            <img
              src={USDT}
              alt=""
              className="w-5 h-5 ml-2 transform cursor-pointer transition-transform hover:scale-110"
            />
          </div>
        ),
      },
      Price: "$107.09",
      "24 %": "24.36%",
      "7D %": "18.7%",
      "30D %": "18.7%",
      Holdings: "$3,282.87",
      "ETH Holdings": 1.8,
      "Avg-Buy Price": "$2305.67",
      Yield: "$456.95",
      "Yield Percentage": "0.25%",
      Allocation: "38%",
    },
  ];

  const columns = [
    {
      field: "#",
      headerName: "#",
      flex: 0.5,
    },
    {
      field: "Pools",
      headerName: "Pools",
      flex: 2,
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>{params.row.Pools.action}</div>
          <div style={{ margin: "0 2px" }}>{params.row.Pools.name}</div>
          <div style={{ margin: "0 5px", color: "#9DA1B2" }}>
            {poolAbbreviations[params.row.Pools.name]}
          </div>
        </div>
      ),
    },
    {
      field: "Price",
      headerName: "Price",
      flex: 1,
      renderCell: (params) => params.row.Price,
      headerRender: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {params.title}
          <img src={info} alt="" className="w-5 h-5 ml-2" />
        </div>
      ),
    },
    {
      field: "24h %",
      headerName: "24h %",
      flex: 0.5,
      renderCell: (params) => (
        <div style={{ margin: "0 4px" }}>{params.row["24 %"]}</div>
      ),
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
      renderCell: (params) => (
        <div style={{ marginRight: "5px" }}>{params.row["24 %"]}</div>
      ),
    },
    {
      field: "Holdings",
      headerName: (
        <div
          style={{ margin: "0 25px", display: "flex", alignItems: "center" }}
        >
          Holdings
          <img src={info} alt="" className="w-2 h-2 ml-2" />
        </div>
      ),
      flex: 1.5,
      renderCell: (params) => (
        <div style={{ margin: "0 25px" }}>
          <div>{params.row.Holdings}</div>
          <div className="text-xs text-right" style={{ color: "#9DA1B2" }}>
            {params.row["ETH Holdings"]} ETH
          </div>
        </div>
      ),
      headerRender: (params) => (
        <div style={{ margin: "0 25px" }}>
          {params.title}
          <img src={info} alt="" className="w-5 h-5 ml-2" />
        </div>
      ),
    },
    {
      field: "Avg-Buy Price",
      headerName: "Avg-Buy Price",
      flex: 1.5,
      renderCell: (params) => params.row["Avg-Buy Price"],
    },
    {
      field: "Yield",
      headerName: "Yield",
      flex: 1.5,
      renderCell: (params) => (
        <div>
          <div>{params.row.Yield}</div>
          <div className="text-xs flex items-center gap-1">
            <img src={Polygon} alt="arrow-icon-up" className="w-2 h-2" />
            <div className="text-[#71C489] text-[10px]">
              {params.row["Yield Percentage"]}
            </div>
          </div>
        </div>
      ),
    },
    {
      field: "Allocation",
      headerName: "Allocation",
      flex: 1,
      renderCell: (params) => params.row.Allocation,
    },
  ];

  const allRows = dummyData;

  return (
    <>
      <div className="flex gap-5">
        {/* Left Side */}
        <PortfolioOverview />

        {/* Right Side */}
        <div className={`mt-[${marginTopValue}]`} style={{ width: "70%" }}>
          <PortfolioInfo
            showHighlights={showHighlights}
            setShowHighlights={(value) => dispatch(setShowHighlights(value))}
          />
          {/* Charts */}
          <div className="container mt-7">
            <HighlightComponentsContainer showHighlights={showHighlights} />
          </div>
          {/* Pool Form  */}
          {isPoolFormOpen ? (
            <PoolFormSection />
          ) : (
            <div className="flex flex-col gap-6 mt-3">
              {/* Top Cards */}
              <div className="flex justify-between space-x-4">
                <div
                  className="flex-shrink-0 md:w-[20%] shadow p-4 bg-white rounded-lg"
                  style={{ boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.09)" }}
                >
                  <div className="text-left">
                    <p className="text-sm mb-2 text-[#838A9B] font-semibold">
                      All-time profit
                    </p>
                    <div className="text-[#71C489] text-2xl mb-2 font-semibold">
                      + $208.02
                    </div>
                    <div className="text-[#71C489] text-lg flex items-center gap-2">
                      <img
                        src={Polygon}
                        alt="arrow-icon-up"
                        className="w-3 h-3"
                      />
                      <span>01.5%</span>
                    </div>
                  </div>
                </div>

                <div
                  className="flex-shrink-0 md:w-[20%]  shadow p-4 bg-white  rounded-lg"
                  style={{ boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.09)" }}
                >
                  {" "}
                  <div className="text-left">
                    <div className="flex items-center justify-between ">
                      <div className="text-sm mb-2 text-[#838A9B] font-semibold">
                        Pool Sharing Income
                      </div>
                      <img src={copy} alt="copy" className="w-5 h-5 mb-2" />
                    </div>
                    <div className="text-[#3840CD] text-2xl mb-2 font-semibold ">
                      $18.02
                    </div>
                    <div className="text-[#838A9B] text-lg">1/8 Followers</div>
                  </div>
                </div>
              </div>

              {/* Chart Details */}
              <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                <div className="flex flex-1">
                  <ChartComponent className="w-full" />
                </div>
                <div className="flex flex-1 ">
                  <Box
                    backgroundColor="#FFFFFF"
                    boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                    border="1px solid #F1F2F5"
                    p="20px"
                    borderRadius="10px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    className="w-full relative"
                  >
                    <div className="flex items-center justify-center ">
                      <h1 className="text-[12px] absolute left-[15px] font-semibold xxl:text-4xl">
                        Allocation
                      </h1>
                      <img
                        src={info_main}
                        alt="info_main"
                        className="w-3 h-3 absolute left-[83px]"
                      />
                    </div>
                    <ProgressCircle size="30" colorLabel="color1" />
                  </Box>
                </div>
              </div>

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
                    onSortModelChange={(newSortModel) =>
                      setSort(...newSortModel)
                    }
                    components={{ Toolbar: PoolSearchComponent }}
                    componentsProps={{
                      toolbar: { searchInput, setSearchInput, setSearch },
                    }}
                  />
                </Box>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <AddTokenModal /> */}
    </>
  );
};

export default PoolCreatorPage;
