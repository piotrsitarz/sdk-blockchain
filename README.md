# Project description
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/piotrsitarz/sdk-blockchain/release.yml?branch=master)](https://github.com/piotrsitarz/sdk-blockchain)
[![npm monthly downloads](https://img.shields.io/npm/dm/sdk-blockchain.svg)](https://www.npmjs.com/package/sdk-blockchain)
[![NPM](https://img.shields.io/npm/l/sdk-blockchain)](https://www.npmjs.com/package/sdk-blockchain)
[![current version](https://img.shields.io/npm/v/sdk-blockchain.svg)](https://www.npmjs.com/package/sdk-blockchain)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) 

Simple [SDK](https://www.npmjs.com/package/sdk-blockchain) that enables communication with the [Covalent RESTful API](https://www.covalenthq.com/docs/api/#/0/0/USD/1) bundled by [microbundle](https://www.npmjs.com/package/microbundle).

# Installation

With npm:

`npm i sdk-blockchain`

...or with yarn:

`yarn add sdk-blockchain`

# API Endpoints

## BalancesApi

| Method                                                                                                                       |                  Arguments                   | HTTP request                                       |
| ---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: | -------------------------------------------------- |
| [getTokenBalances()](https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/1)                   | `chainId`: **number**, `address`: **string** | **GET**/${chainId}/address/${address}/balances_v2  |
| [getHistoricalPortfolio()](https://www.covalenthq.com/docs/api/#/0/Get%20historical%20portfolio%20value%20over%20time/USD/1) | `chainId`: **number**, `address`: **string** | **GET**/${chainId}/address/${address}/portfolio_v2 |

# Authorization

## API key

Every endpoints required to be authenticated using the API key mechanism.
To receive it, please go [here](https://www.covalenthq.com/platform/#/auth/login)

All you have to do is provide an API key when instantiating the SDK client:

```
const balance: Balances = new Balances({
  apiKey: "YOUR_API_KEY",
});
```

# Usage

```
balance.getTokenBalances(chainId, address).then((tokenBalances) => {
  console.log({ tokenBalances });
});
```

```
balance.getHistoricalPortfolio(chainId, address).then((portfolio) => {
  console.log({ portfolio });
});
```

for demonstration purposes these values can be used:
`chainId = 1`
`address = "demo.eth"`
