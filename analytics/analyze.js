// - Analyze the fetched data to identify changes in cryptocurrency prices, such as increases or decreases, over the specified time period. 
    // SOME UTILITY/ANALYSIS FUNCTIONS NEEDED TO GO OVER THIS DATA

const increases = []
const decreases = []

export function analyzeTrades(trades) {
  // Here we could be checking prices comparisons and 
  // return number of decreases and increases
  for (let i = 1; i < trades.length; i++) {
    const prevTrade = trades[i-1];
    const currentTrade = trades[i];

    const prevTradePrice = Number(prevTrade['price']);
    const currentTradePrice = Number(currentTrade['price']);

    if(prevTradePrice < currentTradePrice) {
      increases.push(currentTrade)
    }

    if(prevTradePrice > currentTradePrice) {
      decreases.push(currentTrade)
    }
  }

  return {
    increases,
    decreases
  }
}