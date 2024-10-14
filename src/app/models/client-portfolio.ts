export class ClientPortfolio {
  constructor(
    public portfolioId: number,
    public instrumentId: string,
    public clientId: number,
    public quantity: number,
    public cashValue: number,
  ) {}
}
