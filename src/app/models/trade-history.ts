export class TradeHistory {
  constructor(
    public Symbol: string,
    public Order_Date: string,
    public transactionDate: string,
    public Type: string,
    public amount: string,
    public price: string
  ) {}
}
