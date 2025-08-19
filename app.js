import express from 'express';
import { getHistoricalTrades } from './api/binance.js';
import { analyzeTrades } from './analytics/analyze.js';

const app = express();
const data = {};

// - Display the analyzed data in a formatted manner.
    // HOW TO PRESENT THIS?

app.get('/symbol/:symbol/', async (req, res, next) => {
    // Cryptocurrency symbol
    const symbol = req.params['symbol'] ?? ''
    let trades;
    if (symbol.length > 0) {
        // Time range??
        trades = await getHistoricalTrades(symbol);
        // We are getting historical trades between given time
        // Now we need to analyze it and identify decreases/increases
        trades.forEach(trade => {
            const date = new Date(trade.time)
        })
    }

    res.send(`Here is data: ${JSON.stringify(data, null, 4)}`);
});


app.listen(5000);