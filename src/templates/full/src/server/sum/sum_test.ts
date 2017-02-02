import { expect } from 'chai';

import { sum } from './sum';

describe('sum(a: number, b: number): number', () => {
  it('should add two numbers together', () => {
    expect(sum(12, 2)).to.equal(14);
    expect(sum(90, -92)).to.equal(-2);
    expect(sum(90, 10)).to.equal(100);
  });
  it('should not subtract numbers', () => {
    expect(sum(12, 2)).to.not.equal(10);
    expect(sum(90, -92)).to.not.equal(-182);
    expect(sum(90, 10)).to.not.equal(80);
  });
});
