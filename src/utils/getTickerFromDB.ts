import { db } from '../APIs/dexie';
import TickerItem from '../interfaces/TickerItem.interface';

const getTickerFromDB = async (ticker: string): Promise<TickerItem> => {
  const result = await db.table('tickers').where('ticker').equals(ticker).first();

  return result;
}

export default getTickerFromDB;
