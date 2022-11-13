export interface DetailGame {
  info: BaseInfo;
  cheapestPriceEver: BestPrice;
  deals: Deal[];
}
export interface BaseInfo {
  title: string;
  steamAppID: string;
  thumb: string;
}
export interface BestPrice {
  price: string;
  date: Date;
}
export interface Deal {
  storeID: string;
  dealID: string;
  price: string;
  retailPrice: string;
  savings: string;
}

