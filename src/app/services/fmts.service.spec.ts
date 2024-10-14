import { TestBed } from '@angular/core/testing';

import { FmtsService } from './fmts.service';
import { Order } from '../models/order';
import { Trade } from '../models/trade';

describe('FmtsService', () => {
  let service: FmtsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FmtsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should execute trade ', (done)=> {
    const order = new Order('AAPL', 10, 150, 'B', '12345');

    service.executeTrade(order).subscribe(trade => {
      expect(trade instanceof Trade).toBeTruthy();
      expect(trade.instrumentId).toBe(order.instrumentId);
      expect(trade.quantity).toBe(order.quantity);
      expect(trade.executionPrice).toBe(order.targetPrice);
      expect(trade.direction).toBe(order.direction);
      expect(trade.clientId).toBe(order.clientId);
      expect(trade.cashValue).toBe(order.quantity*order.targetPrice);
      done();
    })
  });
});
