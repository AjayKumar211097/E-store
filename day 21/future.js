const axios = require("axios");
const fs = require("fs");

// Function to fetch All-Time High (ATH) and calculate future growth based on ATH
async function fetchATHAndGrowth(symbol) {
    try {
        // Format the symbol for Yahoo Finance (e.g., ICICIBANK.NS for Indian stocks)
        const yahooSymbol = `${symbol}.NS`;

        // URL for fetching stock data from Yahoo Finance
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
        // Find the initial price and the final price in the historical data
        const initialPrice = newClosePrices[0]; // First price in the data (oldest)
        const finalPrice = newClosePrices[newClosePrices.length - 1]; // Last price in the data (most recent)

        const years =
            (timestamps[timestamps.length - 1] - timestamps[0]) /
            (365 * 24 * 60 * 60); // Number of years based on timestamps

        // Calculate the Compound Annual Growth Rate (CAGR)
        const cagr = Math.pow(finalPrice / initialPrice, 1 / years) - 1;

        // Calculate future values using the CAGR
        const futureValue1Year = finalPrice * Math.pow(1 + cagr, 1);
        const futureValue3Years = finalPrice * Math.pow(1 + cagr, 3);
        const futureValue5Years = finalPrice * Math.pow(1 + cagr, 5);

        console.log(`📊 ${symbol}`);
        console.log(`- Calculated CAGR : ${(cagr * 100).toFixed(2)}%`);
        console.log(`- Future Value for ${symbol}:`);
        console.log(
            `- ₹${futureValue1Year.toFixed(2)}  ₹${futureValue3Years.toFixed(
                2
            )}  ₹${futureValue5Years.toFixed(2)}`
        );
        return {
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

// Main function to process multiple stocks and calculate ATH and growth
async function main() {
    const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

    // Iterate through all the stocks
    const aggregatedTotal = {
        agg1T: 0,
        agg3T: 0,
        agg5T: 0,
    };
    for (const { symbol, buy_price, quantity } of data) {
        const result = await fetchATHAndGrowth(symbol);
        if (result !== null) {
            const {
                finalPrice,
                cagr,
                futureValue1Year,
                futureValue3Years,
                futureValue5Years,
            } = result;

            // Calculate total value for each of the future growth scenarios
            const totalFutureValue1Year = futureValue1Year * quantity;
            const totalFutureValue3Years = futureValue3Years * quantity;
            const totalFutureValue5Years = futureValue5Years * quantity;

            aggregatedTotal.agg1T += totalFutureValue1Year;
            aggregatedTotal.agg3T += totalFutureValue3Years;
            aggregatedTotal.agg5T += totalFutureValue5Years;
            console.log(
                `- Bought ${quantity} at: ₹${buy_price} Invested: ₹${
                    buy_price.toFixed(2) * quantity
                }`
            );
            console.log(`\n- Total Value if ${symbol} reaches future growth:`);
            console.log(
                `- ₹${totalFutureValue1Year.toFixed(
                    2
                )} ₹${totalFutureValue3Years.toFixed(
                    2
                )} ₹${totalFutureValue5Years.toFixed(2)} \n`
            );
            console.log("----------------------------------");
        }
    }
    console.log(
        `-Expected : ₹${formatINR(aggregatedTotal.agg1T.toFixed(2))}
          ₹${formatINR(aggregatedTotal.agg3T.toFixed(2))}
          ₹${formatINR(aggregatedTotal.agg5T.toFixed(2))}\n`
    );
}
const formatINR = (value) => {
    // Ensure the value is a number and split into the integer and decimal part
    let [integer, decimal] = value.toString().split(".");

    // Format the integer part for the Indian numbering system
    integer = integer.replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ",");
    // If there's a decimal part, append it back
    return decimal ? `₹${integer}.${decimal}` : `₹${integer}`;
};

// Run the script
main();
