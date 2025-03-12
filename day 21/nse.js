const fs = require("fs");
const axios = require("axios");

// Function to convert NSE/BSE symbols to Yahoo Finance format
const formatYahooSymbol = (symbol) => `${symbol}.NS`; // NSE stocks have .NS suffix

// Read input data from data.json
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// Function to fetch All-Time High (ATH) price from Yahoo Finance
async function fetchAllTimeHigh(symbol) {
    try {
        const yahooSymbol = formatYahooSymbol(symbol);
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${yahooSymbol}?interval=1d&range=max`;

        const response = await axios.get(url);
        const prices = response.data.chart.result[0].indicators.quote[0].high;

        if (!prices || prices.length === 0) {
            console.error(`⚠️ No data found for ${symbol}`);
            return null;
        }

        // Get the max price from historical data
        const athPrice = Math.max(...prices.filter(Boolean));
        return athPrice;
    } catch (error) {
        console.error(`❌ Error fetching ATH for ${symbol}: ${error.message}`);
        return null;
    }
}

// Main function to process stock data
async function main() {
    let totalAthValue = 0;

    console.log("\n📊 **Stock Performance at All-Time High:**\n");

    for (const { symbol, buy_price, quantity } of data) {
        const athPrice = await fetchAllTimeHigh(symbol);
        if (athPrice === null) {
            console.log(`⚠️ Skipping ${symbol} due to missing ATH data.\n`);
            continue;
        }

        const athValue = athPrice * quantity;
        totalAthValue += athValue;

        console.log(`🔹 **${symbol}**:`);
        console.log(
            `   - Bought ${quantity} at: ₹${buy_price} Invested: ₹${
                buy_price.toFixed(2) * quantity
            }`
        );
        console.log(
            `   - All-Time High Price: ₹${athPrice.toFixed(
                2
            )} : ₹${athValue.toFixed(2)}\n`
        );
    }

    console.log("----------------------------------------------");
    console.log(
        `💹 **Total Portfolio Value at All-Time High: ₹${totalAthValue.toFixed(
            2
        )}**\n`
    );
}

// Run the script
main();
