import input from 'analiza-sync';
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
