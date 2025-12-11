import { stockMarket } from '../data/dataActions.js';

export function checkStockAvailable(identifier, quantity) {
  for (let i = 0; i < stockMarket.stocks.length; i++) {
    if (
      stockMarket.stocks[i].name === identifier ||
      stockMarket.stocks[i].id === identifier
    ) {
      return (
        stockMarket.stocks[i].availableStocks > 0 &&
        stockMarket.stocks[i].availableStocks > quantity
      );
    }
  }
}

export function updateBuyPrice(identifier, quantity) {
  for (let i = 0; i < stockMarket.stocks.length; i++) {
    if (
      stockMarket.stocks[i].name === identifier ||
      stockMarket.stocks[i].id === identifier
    ) {
      stockMarket.stocks[i].currentPrice *= 1.05;
      stockMarket.stocks[i].availableStocks -= quantity;
      for (let j = 0; j < stockMarket.stocks.length; j++) {
        if (stockMarket.stocks[i].category === stockMarket.stocks[j].category) {
          if (
            stockMarket.stocks[j].name !== identifier ||
            stockMarket.stocks[j].id !== identifier
          )
            console.log(stockMarket.stocks[i]);
          console.log(stockMarket.stocks[j].category);
          stockMarket.stocks[i].currentPrice *= 1.01;
        }
      }
    }
  }
}

export function updateSellPrice(identifier, quantity) {
  for (let i = 0; i < stockMarket.stocks.length; i++) {
    if (
      stockMarket.stocks[i].name === identifier ||
      stockMarket.stocks[i].id === identifier
    ) {
      stockMarket.stocks[i].currentPrice *= 0.95;
      stockMarket.stocks[i].availableStocks += quantity;

      for (let j = 0; j < stockMarket.stocks.length; j++) {
        if (stockMarket.stocks[i].category === stockMarket.stocks[j].category) {
          if (
            stockMarket.stocks[j].name !== identifier ||
            stockMarket.stocks[j].id !== identifier
          )
            console.log(stockMarket.stocks[i]);
          console.log(stockMarket.stocks[j].category);
          stockMarket.stocks[j].currentPrice *= 0.99;
        }
      }
    }
  }
}
