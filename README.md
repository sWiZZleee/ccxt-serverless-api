# CCXT-Serverless-Api

This is a migration of an Express backend API I had created for a proof concept/demo project to a serverless architecture using Azure functions. Here we are able to keep our backend infrastructure entirely independent of our frontend, even though this is definitely achievable with other infrastructure design layouts using Node.js integrating in such a way makes it much more maintainable now and on a much more scalable level later on with Azure's toolbox of integrated monitoring tools.

Each push made to the master branch is autonomously picked up by Azure, built and re-deployed with the new changes. Just simply starting off the project like this is amazing as it will save time which is money in the future having already been ready for the hopefully inevitable day that we must scale up if we do not apply an elastic scaling solution to our problem before such time may arise.

This project was once private and after it essentially 'died' when we decided to move to a different hosting provider I thought I may aswell make it public to show I have deployed such architecture to Azure Cloud, even though there are only 2 routes and they're nothing special cloud based applications are all about the setup and deployment, the rest is standard API development.

## Hooks

The thing that makes this repository different from most other serverless-api projects is that it currently uses Husky to tap into Git Hooks and run linting on staged files before commiting. The style-guide and any other operations you may want performed are fully customizable to your personal liking. Simply edit the `.huskyrc.js` to perform the tasks you would like on specific Git Hooks.


## Routes

Below is a section dedicated to the routes currently defined and created, plus any extra info that may be handy to fellow developers.

### /api/GetExchanges

**GET** route accepts **no parameters** and returns an array of all the available exchanges that we are able to interact with using the open-source CCXT library for CryptoCurrency Trading.

Below is a sample of what the head of the response should look like:

```json
{
    "_1btcxe",
    "acx",
    "allcoin",
    "anxpro",
    "anybits",
    "bcex",
    "bequant",
    "bibox",
    "bigone",
    "binance",
    ...
    
```

### /api/BinanceSymbols

**GET** route accepts **no parameters** and returns an array of all the symbols you can interact with on the Binance platform.