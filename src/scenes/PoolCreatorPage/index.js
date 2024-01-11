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
  ProgressCircle,
} from "../../components";
import { DataGrid } from "@mui/x-data-grid";
import { copy, eye_x, info, minus_x, plus_x, star } from "../../assets";

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

  const dummyData = [
    {
      _id: 1,
      "#": 1,
      "Pool ID": "XBR1084378",
      Pools: <CoinAvatarGroup />,
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
      Pools: <CoinAvatarGroup />,
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
      Pools: <CoinAvatarGroup />,
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
      Pools: <CoinAvatarGroup />,
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
      Pools: <CoinAvatarGroup />,
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
      Pools: <CoinAvatarGroup />,
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
        />
      ),
    },
    {
      field: "#",
      headerName: "#",
      flex: 0.5,
    },
    {
      field: "Pools",
      headerName: "Pools",
      flex: 1,
      headerRender: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {params.title}
          <img src={info} alt="" className="w-5 h-5 ml-2 " />
        </div>
      ),
    },
    {
      field: "Price",
      headerName: "Price",
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
      field: "Holdings",
      headerName: "Holdings",
      flex: 1,
      renderCell: (params) => params.row.Volume,
    },
    {
      field: "Avg-Buy Price",
      headerName: "Avg-Buy Price",
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
      field: "Allocation",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <div className="flex items-center justify-center">
          <img
            src={eye_x}
            alt=""
            className="w-5 h-5 ml-2 border-2 border-gray-300 bg-white p-2 rounded-lg"
          />
          <img
            src={plus_x}
            alt=""
            className="w-5 h-5 ml-2 border-2 border-gray-300 bg-white p-2 rounded-lg"
          />
          <img
            src={minus_x}
            alt=""
            className="w-5 h-5 ml-2 border-2 border-gray-300 bg-white p-2 rounded-lg"
          />
        </div>
      ),
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
            <div className="flex flex-col gap-6 p-6">
              {/* Top Cards */}
              <div className="flex justify-between space-x-4">
                <div className="flex-shrink-0 w-[20%]">
                  <div className="text-left shadow p-4 rounded-lg bg-white">
                    <div className="text-sm mb-2">All-time profit</div>
                    <div className="text-green-600 text-2xl mb-2">
                      + $208.02
                    </div>
                    <div className="text-blue-500 text-lg">01.5%</div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-[20%]">
                  <div className="text-left shadow p-4 rounded-lg bg-white">
                    <div className="flex items-center justify-between ">
                      <div className="text-sm mb-2">Pool Sharing Income</div>
                      <img src={copy} alt="copy" className="w-5 h-5" />
                    </div>
                    <div className="text-green-600 text-2xl mb-2">+ $18.02</div>
                    <div className="text-blue-500 text-lg">1/8 Followers</div>
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
                    <h1 className="text-[10px] absolute left-[15px] font-semibold xxl:text-4xl">
                      Leads by Source
                    </h1>

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
                    components={{ Toolbar: DataGridCustomToolbar }}
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
