export default interface TickerItem {
  id?: number;
  ticker?: string;
  name?: string;
  currentPrice?: number;
  openPrice?: number;
  closePrice?: number;
  currencyName?: string;
}
