import { brighten, darken } from '../lum';

describe('brighten', () => {
  it('should brighten colors correctly', () => {
    const tests = [
      ['#e39f92', 0.4, '#ffdfcc'],
      ['#e39f92', 0.3, '#ffcfbe'],
      ['#e39f92', 0.2, '#ffbfaf'],
      ['#e39f92', 0.1, '#faafa1'],
      ['#e39f92', 0.0, '#e39f92'],
    ];

    tests.forEach(([base, amount, expected]) => {
      expect(brighten(base, amount)).toEqual(expected);
    });
  });

  it('should handle shorthand', () => {
    expect(brighten('#a1a', 0.4)).toEqual('#ee18ee');
  });

  it('should not modify white', () => {
    expect(brighten('#ffffff', Math.random())).toEqual('#ffffff');
  });

  it('should not modify black', () => {
    expect(brighten('#000000', Math.random())).toEqual('#000000');
  });

  it('should default scale factor to 0', () => {
    expect(brighten('#e39f92')).toEqual('#e39f92');
  });
});

describe('darken', () => {
  it('should darken colors correctly', () => {
    const tests = [
      ['#e39f92', 0.8, '#2d201d'],
      ['#e39f92', 0.6, '#5b403a'],
      ['#e39f92', 0.4, '#885f58'],
      ['#e39f92', 0.2, '#b67f75'],
      ['#e39f92', 0.0, '#e39f92'],
    ];

    tests.forEach(([base, amount, expected]) => {
      expect(darken(base, amount)).toEqual(expected);
    });
  });

  it('should handle shorthand', () => {
    expect(darken('#a1a', 0.4)).toEqual('#660a66');
  });

  it('should not modify black', () => {
    expect(darken('#000000', Math.random())).toEqual('#000000');
  });

  it('should default scale factor to 0', () => {
    expect(darken('#e39f92')).toEqual('#e39f92');
  });
});
