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
    let trades, analytics;
    if (symbol.length > 0) {
        // We could be getting time range from the queries/params
        trades = await getHistoricalTrades(symbol);
        analytics = analyzeTrades(trades)
    }

    res.send(`Here is data: ${JSON.stringify(analytics, null, 4)}`);
});


app.listen(5000);