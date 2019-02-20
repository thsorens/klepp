import { add, subtract, multiply, divide } from './calculations.js';

describe('test the calculator', () => {

  it("Should add two numbers together", () => {
    expect(add(2, 4)).toBe(6);
    expect(add(2, 7)).toBe(9);
  })

  it("should subtract one number from another", () => {
    expect(subtract(5,2)).toBe(3);
    expect(subtract(-1, -5)).toBe(6);
  });

  it("should multiply to numbers correctly", () => {
    expect(multiply(3, 3)).toBe(9);
    expect(multiply(2, 2)).toBe(4);
  });

  it("should divide one number by another", () => {
    expect(divide(9, 3)).toBe(3);
  });

});