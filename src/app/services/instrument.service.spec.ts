import { TestBed } from '@angular/core/testing';

import { InstrumentService } from './instrument.service';
import { Instrument } from '../models/instrument';

describe('InstrumentService', () => {
  let service: InstrumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstrumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return instruments', (done) => {
    service.getInstruments().subscribe(instruments => {
      expect(instruments).toBeTruthy();
      expect(instruments.length).toBeGreaterThan(0);
      expect(instruments[0] instanceof Instrument).toBeTruthy();
      done();
    })
  })
});
