const ccxt = require('ccxt')

module.exports = async function (context, req) {
  // Pull the list of exchanges CCXT can interact with
  const data = await ccxt.exchanges
  context.res = {
    status: 200,
    body: {
      exchanges: data
    }
  }
}
