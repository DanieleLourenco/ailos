import { CardPipe } from './card.pipe';

describe('TestePipe', () => {
  it('create an instance', () => {
    const pipe = new CardPipe();
    expect(pipe).toBeTruthy();
  });
});
