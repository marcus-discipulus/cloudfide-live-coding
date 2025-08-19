import express from 'express';
import { WebSocket } from 'ws';
import { getHistoricalTrades } from './api/binance.js';

const app = express();

// - Fetch historical market data for a specific cryptocurrency symbol and time range using the API.
    // HOW DO WE QUERY THIS API TO GET HISTORICAL MARKET DATA?

// - Analyze the fetched data to identify changes in cryptocurrency prices, such as increases or decreases, over the specified time period. 
    // SOME UTILITY/ANALYSIS FUNCTIONS NEEDED TO GO OVER THIS DATA

// - Display the analyzed data in a formatted manner.
    // HOW TO PRESENT THIS?

app.get('/symbol/:symbol/', async (req, res, next) => {
    // Cryptocurrency symbol
    const symbol = req.params['symbol'] ?? ''
    let trades;
    if (symbol.length > 0) {
        // Time range??
        trades = await getHistoricalTrades('BTCUSDT', 1755593525395, 1755593704198);
    }

    res.send(`Here is data: ${JSON.stringify(trades, null, 4)}`);
});


app.listen(5000);