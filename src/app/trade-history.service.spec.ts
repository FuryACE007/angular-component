import { TestBed } from '@angular/core/testing';

import { TradeHistoryService } from './trade-history.service';
import { HttpClientModule } from '@angular/common/http';
describe('TradeHistoryService', () => {
  let service: TradeHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(TradeHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
