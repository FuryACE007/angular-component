import { Injectable } from '@angular/core'
import { Price } from '../models/price'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class PriceService {
  livePrices: Price[] = []
  jsonPrices = [
    {
      askPrice: 104.75,
      bidPrice: 104.25,
      timestamp: '21-AUG-19 10.00.01.042000000 AM GMT',
      instrument: {
        instrumentId: 'N123456',
        categoryId: 'STOCK',
        description: 'JPMorgan Chase & Co. Capital Stock',
        maxQuantity: 1000,
        minQuantity: 1,
      },
      instrumentId: '',
    },
    {
      askPrice: 312500,
      bidPrice: 312000,
      timestamp: '21-AUG-19 05.00.00.040000000 AM -05:00',
      instrument: {
        instrumentId: 'N123789',
        categoryId: 'STOCK',
        description: 'Berkshire Hathaway Inc. Class A',
        maxQuantity: 10,
        minQuantity: 1,
      },
      instrumentId: '',
    },
    {
      askPrice: 95.92,
      bidPrice: 95.42,
      timestamp: '21-AUG-19 10.00.02.042000000 AM GMT',
      instrument: {
        instrumentId: 'C100',
        categoryId: 'CD',
        description: 'JPMorgan Chase Bank, National Association 01/19',
        maxQuantity: 1000,
        minQuantity: 100,
      },
      instrumentId: '',
    },
  ]

  loadPriceFromJson() {
    this.livePrices = this.jsonPrices.map(
      (jsonPrice) =>
        new Price(
          jsonPrice.instrumentId,
          jsonPrice.bidPrice,
          jsonPrice.askPrice,
          jsonPrice.timestamp,
          jsonPrice.instrument,
        ),
    )
  }

  getLivePrices(): Observable<Price[]> {
    return of(this.livePrices)
  }

  getLivePriceByInstrumentId(
    instrumentId: string,
  ): Observable<Price | undefined> {
    const livePrice = this.livePrices.find(
      (price) => price.instrument.instrumentId === instrumentId,
    )
    return of(livePrice)
  }

  constructor() {
    this.loadPriceFromJson()
  }
}
