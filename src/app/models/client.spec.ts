import { Client } from './client';

describe('Client', () => {
  it('should create an instance', () => {
    expect(new Client('12', 500)).toBeTruthy();
  });
});
