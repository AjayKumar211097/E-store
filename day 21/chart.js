const axios = require("axios");
const { ChartJSNodeCanvas } = require("chartjs-node-canvas");
const fs = require("fs");

// Function to fetch All-Time High (ATH) and calculate future growth based on ATH
async function fetchATHAndGrowth(symbol) {
    try {
        const yahooSymbol = `${symbol}.NS`;
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${yahooSymbol}?interval=1d&range=max`;

        const response = await axios.get(url);

        if (
            response.status !== 200 ||
            !response.data.chart ||
            !response.data.chart.result
        ) {
            console.error(`❌ Failed to fetch data for ${symbol}`);
            return null;
        }

        const chartData = response.data.chart.result[0];
        const timestamps = chartData.timestamp;
        const closePrices = chartData.indicators.adjclose[0];

        if (!timestamps || !closePrices || closePrices.length === 0) {
            console.error(`⚠️ No valid data available for ${symbol}`);
            return null;
        }

        const newClosePrices = [...closePrices.adjclose];
        const initialPrice = newClosePrices[0];
        const finalPrice = newClosePrices[newClosePrices.length - 1];

        const years =
            (timestamps[timestamps.length - 1] - timestamps[0]) /
            (365 * 24 * 60 * 60);

        const cagr = Math.pow(finalPrice / initialPrice, 1 / years) - 1;

        const futureValue1Year = finalPrice * Math.pow(1 + cagr, 1);
        const futureValue3Years = finalPrice * Math.pow(1 + cagr, 3);
        const futureValue5Years = finalPrice * Math.pow(1 + cagr, 5);

        return {
            symbol,
            initialPrice,
            finalPrice,
            cagr,
            futureValue1Year,
            futureValue3Years,
            futureValue5Years,
        };
    } catch (error) {
        console.error(
            `❌ Error fetching ATH or calculating growth for ${symbol}: ${error.message}`
        );
        return null;
    }
}

async function main() {
    const stocks = [
        { symbol: "ICICIBANK", buy_price: 1233.5, quantity: 35 },
        { symbol: "ZAGGLE", buy_price: 349.1, quantity: 280 },
        { symbol: "VBL", buy_price: 459.27, quantity: 185 },
        { symbol: "LTFOODS", buy_price: 351.58, quantity: 290 },
    ];

    const futurePrices = [];
    const aggregatedPrices = {
        labels: ["Current", "1 Year", "3 Years", "5 Years"],
        datasets: [
            {
                label: "Aggregated Future Value",
                borderColor: "blue",
                fill: false,
                data: [0, 0, 0, 0], // To be updated with aggregated data
                tension: 0.1,
            },
        ],
    };

    // Iterate through all the stocks
    for (const { symbol, buy_price, quantity } of stocks) {
        const result = await fetchATHAndGrowth(symbol);

        if (result !== null) {
            const {
                finalPrice,
                futureValue1Year,
                futureValue3Years,
                futureValue5Years,
            } = result;

            futurePrices.push({
                symbol,
                prices: [
                    finalPrice,
                    futureValue1Year,
                    futureValue3Years,
                    futureValue5Years,
                ],
            });

            // Update the aggregated future values
            aggregatedPrices.datasets[0].data =
                aggregatedPrices.datasets[0].data.map(
                    (value, index) =>
                        value +
                        futurePrices[futurePrices.length - 1].prices[index] *
                            quantity
                );
        }
    }

    // Prepare data for Chart.js
    const labels = futurePrices.map((stock) => stock.symbol);
    const datasets = futurePrices.map((stock) => ({
        label: `${stock.symbol} Future Price`,
        data: stock.prices,
        borderColor: "rgb(75, 192, 192)",
        fill: false,
        tension: 0.1,
    }));

    // Merge aggregated line into datasets
    datasets.push(aggregatedPrices.datasets[0]);

    // Create chart
    const chartJSNodeCanvas = new ChartJSNodeCanvas({
        width: 800,
        height: 600,
    });

    const configuration = {
        type: "line",
        data: {
            labels: aggregatedPrices.labels,
            datasets: datasets,
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: "Stock Growth and Aggregated Future Value",
                },
                legend: {
                    position: "top",
                },
            },
        },
    };

    const imageBuffer = await chartJSNodeCanvas.renderToBuffer(configuration);

    // Save the chart as an image
    fs.writeFileSync("stock_growth_chart.png", imageBuffer);
    console.log("Chart saved as stock_growth_chart.png");
}

// Run the script
main();
