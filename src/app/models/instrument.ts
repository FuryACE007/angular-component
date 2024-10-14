export class Instrument {
  instrumentId: string
  description: string
  categoryId: string
  minQuantity: number
  maxQuantity: number

  constructor(
    instrumentId: string,
    description: string,
    categoryId: string,
    minQuantity: number,
    maxQuantity: number,
  ) {
    this.instrumentId = instrumentId
    this.description = description
    this.categoryId = categoryId
    this.minQuantity = minQuantity
    this.maxQuantity = maxQuantity
  }
}
