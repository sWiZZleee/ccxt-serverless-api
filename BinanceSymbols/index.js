const ccxt = require('ccxt')
// Init the Binance Exchange
const exchange = new ccxt.binance()
exchange.load_markets()

module.exports = function (context, req) {
  // Return an array of symbols available on Binance
  const data = exchange.symbols
  context.res = {
    status: 200,
    body: {
      symbols: data
    }
  }
  context.done()
}
