import express from 'express';
import { fetchSymbolPrice } from './api/binance.js';

const app = express();


app.get('/', async (req, res, next) => {
    const symbolPrice = await fetchSymbolPrice('BTCUSDT');

    res.send(`Here is data: ${JSON.stringify(symbolPrice, null, 4)}`);
});


app.listen(5000);