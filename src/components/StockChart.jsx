// import React, { useEffect } from 'react';
// import Highcharts from 'highcharts/highstock';
// // import HighchartsReact from 'highcharts-react-official';

// const StockChart = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           'https://demo-live-data.highcharts.com/aapl-ohlc.json'
//         );
//         const data = await response.json();

//         // Create the chart
//         Highcharts.stockChart('container', {
//           rangeSelector: {
//             selected: 1
//           },
//           title: {
//             text: 'AAPL Stock Price'
//           },
//           series: [
//             {
//               type: 'candlestick',
//               name: 'AAPL Stock Price',
//               data: data,
//               dataGrouping: {
//                 units: [
//                   [
//                     'week', // unit name
//                     [1] // allowed multiples
//                   ],
//                   [
//                     'month',
//                     [1, 2, 3, 4, 6]
//                   ]
//                 ]
//               }
//             }
//           ]
//         });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array to run the effect only once after mount

//   return (
//     <div>
//       <div id="container" style={{ height: '400px' }}></div>
//     </div>
//   );
// };

// export default StockChart;
