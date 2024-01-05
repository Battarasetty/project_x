import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    BarElement
} from 'chart.js'

import { faker } from '@faker-js/faker'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    BarElement
)


export const mockDataToken = [
    {
        id: 1,
        token: "USDT",
        value: 0.0000
    },
    {
        id: 2,
        token: "ETH",
        value: 0.0000
    },
    {
        id: 3,
        token: "XBR",
        value: 0.0000
    },
];

export const mainChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            position: "left",
            ticks: {
                min: 0,  // Set the minimum value for the y-axis (if needed)
                maxTicksLimit: 5,  // Ensure at least 5 ticks on the y-axis
                callback: (value) => `$${value}M`,
                color: '#838A9B', // Set the color for Y-axis labels
                font: {
                    size: 8, // Set the font size for Y-axis labels
                },
            },
        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                maxTicksLimit: 8,
                align: "inner",
                color: '#838A9B', // Set the color for X-axis labels
                font: {
                    size: 6, // Set the font size for X-axis labels
                },
            },
        },
    },
    point: false,
    elements: {
        point: {
            pointStyle: false,
        },
        line: {
            borderColor: 'rgb(95, 158, 199)',
            fill: true,
            borderWidth: 1.5,
        },
    },
};



const seedValue = 123; // Use any constant seed value

export const getMainChartData = () => {
    faker.seed(seedValue); // Set the seed for consistent data

    const data = {
        labels: ["3.00", "6.00", "9.00", "12.00", "3.00", "6.00", '9.00', '25'], datasets: [
            {
                label: "Views",
                data: Array.from({ length: 6 }, (_, index) => {
                    const baseValue = 200 + index * 35; // Adjust the base value as needed
                    const fluctuation = faker.datatype.number(15); // Simulate small fluctuations
                    return (baseValue + fluctuation) / 1000; // Divide by 1000 to get values in millions
                }),
                backgroundColor: '#DDE0FD',
                animation: false,
            },
        ],
    };

    console.log("Main Chart Data:", data);

    return data;
};


