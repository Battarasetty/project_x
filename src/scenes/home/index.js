import React, { useState } from 'react';
import { Box, FormControlLabel, Grid, Switch } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { eye_x, ic_search, info, minus_x, plus_x, star } from '../../assets';
import { ChartComponent, CoinAvatarGroup, DataGridCustomToolbar, StatBox, TrendingArticle, VolumeLeaderComponent } from '../../components';

const Home = () => {
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");
    const [searchInput, setSearchInput] = useState("");

    const [showHighlights, setShowHighlights] = useState(true);

    const dummyData = [
        { _id: 1, '#': 1, 'Pool ID': 'XBR1084378', Pools: <CoinAvatarGroup />, Tokens: 10, 'Token PoolCap': '$384,321,120.12', '24 %': '18.7%', '7D %': '18.7%', '30D %': '18.7%', Volume: '$263,282.87', Yield: '$23,456.67', Action: 'Icons' },
        { _id: 2, '#': 2, 'Pool ID': 'XBR1084379', Pools: <CoinAvatarGroup />, Tokens: 15, 'Token PoolCap': '$512,456,789.45', '24 %': '22.5%', '7D %': '22.5%', '30D %': '22.5%', Volume: '$375,890.23', Yield: '$32,145.89', Action: 'Icons' },
        { _id: 3, '#': 3, 'Pool ID': 'XBR1084380', Pools: <CoinAvatarGroup />, Tokens: 8, 'Token PoolCap': '$240,987,654.32', '24 %': '15.2%', '7D %': '15.2%', '30D %': '15.2%', Volume: '$182,345.67', Yield: '$15,678.90', Action: 'Icons' },
        { _id: 4, '#': 4, 'Pool ID': 'XBR1084381', Pools: <CoinAvatarGroup />, Tokens: 12, 'Token PoolCap': '$643,210,987.65', '24 %': '28.3%', '7D %': '28.3%', '30D %': '28.3%', Volume: '$498,765.43', Yield: '$45,678.12', Action: 'Icons' },
        { _id: 5, '#': 5, 'Pool ID': 'XBR1084382', Pools: <CoinAvatarGroup />, Tokens: 20, 'Token PoolCap': '$820,123,456.78', '24 %': '35.6%', '7D %': '35.6%', '30D %': '35.6%', Volume: '$689,012.34', Yield: '$58,901.23', Action: 'Icons' },
        { _id: 6, '#': 6, 'Pool ID': 'XBR1084383', Pools: <CoinAvatarGroup />, Tokens: 18, 'Token PoolCap': '$735,468,912.54', '24 %': '31.9%', '7D %': '31.9%', '30D %': '31.9%', Volume: '$567,123.45', Yield: '$51,234.56', Action: 'Icons' },
    ];


    const columns = [
        {
            field: 'id',
            headerName: '',
            flex: 0.5,
            renderCell: (params) => (
                <img src={star} alt="" className="w-5 h-5 ml-2 " />
            ),
        },
        {
            field: '#',
            headerName: '#',
            flex: 0.5,
        },
        {
            field: 'Pool ID',
            headerName: 'Pool ID',
            flex: 1,
            headerRender: (params) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {params.title}
                    <img src={info} alt="" className="w-5 h-5 ml-2 " />
                </div>
            ),
        },
        {
            field: 'Pools',
            headerName: 'Pools',
            flex: 1,
            renderCell: (params) => params.row.Pools,
            headerRender: (params) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {params.title}
                    <img src={info} alt="" className="w-5 h-5 ml-2 " />
                </div>
            ),
        },
        {
            field: 'Tokens',
            headerName: 'Tokens',
            flex: 0.5,
            renderCell: (params) => params.row.Tokens,
            headerRender: (params) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {params.title}
                    <img src={info} alt="" className="w-5 h-5 ml-2 " />
                </div>
            ),
        },
        {
            field: 'Token PoolCap',
            headerName: 'Token PoolCap',
            flex: 1,
            renderCell: (params) => params.row['Token PoolCap'],
            headerRender: (params) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {params.title}
                    <img src={info} alt="" className="w-5 h-5 " />
                </div>
            ),
        },
        {
            field: '24h %',
            headerName: '24h %',
            flex: 0.5,
            renderCell: (params) => params.row['24 %'],
        },
        {
            field: '7D %',
            headerName: '7D %',
            flex: 0.5,
            renderCell: (params) => params.row['7D %'],
        },
        {
            field: '30D %',
            headerName: '30D %',
            flex: 0.5,
            renderCell: (params) => params.row['30D %'],
        },
        {
            field: 'Volume',
            headerName: 'Volume',
            flex: 1,
            renderCell: (params) => params.row.Volume,
        },
        {
            field: 'Yield',
            headerName: 'Yield',
            flex: 1,
            renderCell: (params) => params.row.Yield,
        },
        {
            field: 'Action',
            headerName: 'Action',
            flex: 1,
            renderCell: (params) => (
                <div className='flex items-center justify-center'>
                    <img src={eye_x} alt="" className="w-5 h-5 ml-2 border-2 border-gray-300 bg-white p-2 rounded-lg" />
                    <img src={plus_x} alt="" className="w-5 h-5 ml-2 border-2 border-gray-300 bg-white p-2 rounded-lg" />
                    <img src={minus_x} alt="" className="w-5 h-5 ml-2 border-2 border-gray-300 bg-white p-2 rounded-lg" />
                </div>
            ),
        },
    ];

    const allRows = dummyData;

    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-4">Good to see you, PAL</h1>
            <div className="flex items-center mb-4 gap-[250px]">
                <p className="text-[#838A9B]">
                    Yes! You can make money by following a pool creator. Start earning your yield today.{' '}
                    <span className="text-blue-500 font-normal underline ml-4">Know More</span>
                </p>
                <FormControlLabel
                    label="HighLights"
                    labelPlacement="start"
                    control={<Switch color="primary" checked={showHighlights} onChange={() => setShowHighlights(!showHighlights)} />}
                    className="ml-4"
                />
            </div>

            {/* Cards */}
            <Grid container style={{ marginTop: 0, gap: '16px' }}>
                <Grid item xs={12} sm={6} md={4} style={{ flex: 1 }}>
                    {/* First component - ChartComponent */}
                    {showHighlights && (
                        <div className="flex-grow">
                            <ChartComponent />
                        </div>
                    )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={{ flex: 1 }}>
                    {/* Second component - TrendingArticle */}
                    {showHighlights && (
                        <div className="flex-grow">
                            <TrendingArticle />
                        </div>
                    )}
                </Grid>
                <Grid item xs={12} sm={6} md={2} style={{ flex: 1 }}>
                    {/* Third component - VolumeLeaderComponent */}
                    {showHighlights && (
                        <div className="flex-grow">
                            <VolumeLeaderComponent />
                        </div>
                    )}
                </Grid>
                <Grid item xs={12} sm={6} md={2} style={{ flex: 1 }}>
                    {/* Fourth component - StatBox */}
                    {showHighlights && (
                        <div className="flex-grow">
                            <StatBox />
                        </div>
                    )}
                </Grid>
            </Grid>

            {/* Fifth Table Component */}
            <div className={showHighlights ? 'mt-7' : ''}>
                <Box
                    gridColumn="span 8"
                    gridRow="span 3"
                    sx={{
                        '& .MuiDataGrid-root': {
                            border: 'none',
                            borderRadius: '5rem',
                        },
                        '& .MuiDataGrid-cell': {},
                        '& .MuiDataGrid-columnHeaders': {
                            backgroundColor: 'white',
                            color: 'black',
                        },
                        '& .MuiDataGrid-virtualScroller': {
                            backgroundColor: 'white',
                        },
                        '& .MuiDataGrid-footerContainer': {
                            backgroundColor: 'white',
                            color: 'black',
                            borderTop: 'none',
                        },
                        '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
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