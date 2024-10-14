import { Injectable } from '@angular/core'
import { Instrument } from '../models/instrument'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class InstrumentService {
  private mockInstruments: Instrument[] = [
    new Instrument(
      'N123456',
      'JPMorgan Chase & Co. Capital Stock',
      'STOCK',
      1,
      1000,
    ),
    new Instrument(
      'N123789',
      'Berkshire Hathaway Inc. Class A',
      'STOCK',
      1,
      10,
    ),
  ]

  getInstruments(): Observable<Instrument[]> {
    return of(this.mockInstruments)
  }
  constructor() {}
}
