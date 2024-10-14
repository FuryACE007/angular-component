export class Order {
  instrumentId: string;
  quantity: number;
  targetPrice: number;
  direction: 'B' | 'S';
  clientId: string;

  constructor(instrumentId: string, quantity: number, targetPrice: number, direction: 'B' | 'S', clientId: string) {
    this.instrumentId = instrumentId;
    this.quantity = quantity;
    this.targetPrice = targetPrice;
    this.direction = direction;
    this.clientId = clientId;
  }
}
