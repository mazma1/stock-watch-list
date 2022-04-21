import { polygonRestClient, polygonReferenceClient } from '../APIs/polygon';
import TickerItem from '../interfaces/TickerItem.interface';

const getTickerPayload = async (ticker: string): Promise<TickerItem> => {
  let payload: TickerItem = {};
  const { results: previousCloseResult } = await polygonRestClient.stocks.previousClose(ticker);
  const { results: tickerDetailsResult } = await polygonReferenceClient.tickerDetails(ticker);
  // const { results: currentPriceResult } = await polygonRestClient.stocks.trades(ticker, formatCurrentDate());

  if(previousCloseResult && previousCloseResult[0]) {
    const { o, c } = previousCloseResult[0]; 
    payload.openPrice = o;
    payload.closePrice = c;
  }

  if(tickerDetailsResult && tickerDetailsResult.active) {
    const { name, ticker } = tickerDetailsResult; 
    payload.name = name;
    payload.ticker = ticker;
  }

  return payload;
}

export default getTickerPayload;
