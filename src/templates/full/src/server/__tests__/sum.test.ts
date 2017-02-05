import { sum } from '../sum';

describe('sum(a: number, b: number): number', () => {
  it('should add two numbers together', () => {
    expect(sum(12, 2)).toEqual(14);
    expect(sum(90, -92)).toEqual(-2);
    expect(sum(90, 10)).toEqual(100);
  });
  it('should not subtract numbers', () => {
    expect(sum(12, 2)).not.toEqual(10);
    expect(sum(12, 2)).not.toEqual(10);
    expect(sum(90, -92)).not.toEqual(-182);
    expect(sum(90, 10)).not.toEqual(80);
  });
});
