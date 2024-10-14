import { Instrument } from './instrument';

xdescribe('Instrument', () => {
  it('should create an instance', () => {
    expect(new Instrument('', '','', 7, 8)).toBeTruthy();
  });
});
