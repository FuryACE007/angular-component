import { TestBed } from '@angular/core/testing'

import { PriceService } from './price.service'
import { Price } from '../models/price'

describe('PriceService', () => {
  let service: PriceService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(PriceService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return all instrument live prices', (done) => {
    service.getLivePrices().subscribe((prices) => {
      expect(prices).toBeTruthy()
      expect(prices.length).toBeGreaterThan(0)
      expect(prices[0] instanceof Price).toBeTruthy()
      done()
    })
  })

  it('should return the instrument by id', (done) => {
    service.getLivePriceByInstrumentId('N123789').subscribe((price) => {
      expect(price).toBeTruthy()
      done()
    })
  })
})
