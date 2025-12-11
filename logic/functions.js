import { stockMarket } from '../data/dataActions.js';

export function searchStock(identifier) {
  let actionsFound = [];
  for (let i = 0; i < stockMarket.stocks.length; i++) {
    if (
      stockMarket.stocks[i].name === identifier ||
      stockMarket.stocks[i].id === identifier
    ) {
      actionsFound.push(stockMarket.stocks[i]);
    }
  }
  return actionsFound;
}

export function filterStocksByPrice(givenPrice, above) {
  let actionsFound = [];
  if (typeof givenPrice === 'number') {
    for (let i = 0; i < stockMarket.stocks.length; i++) {
      if (above) {
        if (stockMarket.stocks[i].currentPrice > givenPrice) {
          // It's not written down, but if we want to include it change to >=
          actionsFound.push(stockMarket.stocks[i]);
        }
      }
      if (!above) {
        if (stockMarket.stocks[i].currentPrice < givenPrice) {
          // It's not written down, but if we want to include it change to <=
          actionsFound.push(stockMarket.stocks[i]);
        }
      }
    }
  }
  return actionsFound;
}
