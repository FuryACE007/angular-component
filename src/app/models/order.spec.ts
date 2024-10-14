import { Order } from './order';

describe('Order', () => {
  it('should create an instance', () => {
    expect(new Order('', 2, 5, 'B', '12')).toBeTruthy();
  });
});
