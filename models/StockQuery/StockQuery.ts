import Datalist from './Datalist';

export default interface StockQuery {
  QueryTime: string
  rtnCode: any
  msg: any
  ERR_CODE: any
  ERR_MSG: any
  datas: any
  datalist?: Datalist[]
  orderList: any
}