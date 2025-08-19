import Binance from 'node-binance-api';

const binance = new Binance({
    APIKEY: '<key>',
    APISECRET: '<secret>',
    test: true, // if you want to use the sandbox/testnet
})

export async function getHistoricalTrades(symbol, startTime, endTime) {
    const trades = await binance.historicalTrades(symbol)
    return trades.filter(trade => trade.time >= startTime && trade.time <= endTime)
}