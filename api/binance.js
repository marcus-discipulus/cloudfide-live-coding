// - Fetch historical market data for a specific cryptocurrency symbol and time range using the API.
    // How?

export async function fetchSymbolPrice(symbol) {
    const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
    return fetch(url).then((res) => res.json());
}