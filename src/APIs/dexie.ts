import Dexie from 'dexie';
import TickerItem from '../interfaces/TickerItem.interface';

const db = new Dexie('TickerList');

db.version(1).stores({
  tickers: '++id,ticker,name,currentPrice,openPrice,closePrice'
});

const addItemToDb = async (payload: TickerItem) => {
  await db.table('tickers').add(payload);
}

const removeItemFromDb = async (id: number) => {
  await db.table('tickers').delete(id);
}

export {
  db,
  addItemToDb,
  removeItemFromDb,
}
