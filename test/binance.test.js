import assert from 'assert';
import { getHistoricalTrades } from '../api/binance.js';

describe('Binance', () => {

  describe('Wrong symbol', () => {
    it('no trades should be fetched', async () => {
      try {
        const trades = await getHistoricalTrades('ABCDE');
        assert.equal(trades[0], undefined);
      } catch (error) {
        assert.notEqual(error, undefined);
      }
    })
  })

  describe('Wrong dates', () => {
    it('should return error message', async () => {
      const trades = await getHistoricalTrades('BTCUSDT', 0, 1);
      assert.equal(trades[0], undefined);
    })
  })
})