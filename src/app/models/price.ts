import { Instrument } from './instrument'

export class Price {
  constructor(
    public instrumentId: string,
    public bidPrice: number,
    public askPrice: number,
    public timestamp: string,
    public instrument: Instrument,
  ) {}
}
