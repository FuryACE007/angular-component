import { v4 as uuidv4 } from 'uuid'

export class Trade {
  instrumentId: string
  quantity: number
  executionPrice: number
  direction: 'B' | 'S'
  clientId: string
  cashValue: number
  tradeId: string

  constructor(
    instrumentId: string,
    quantity: number,
    executionPrice: number,
    direction: 'B' | 'S',
    clientId: string,
    cashValue: number,
  ) {
    this.instrumentId = instrumentId
    this.quantity = quantity
    this.executionPrice = executionPrice
    this.direction = direction
    this.clientId = clientId
    this.cashValue = cashValue
    this.tradeId = uuidv4()
  }
}
