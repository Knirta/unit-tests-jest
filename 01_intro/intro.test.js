const {sum, nativeNull} = require('./intro');

describe("Sum function", () => {
    test('Should return sum of two values', () => {
        expect(sum(2,3)).toBe(5);
        expect(sum(2,3)).toEqual(5);
    });
    
    test('Should return value correctly comparing to other values', () => {
        expect(sum(2,3)).toBeGreaterThan(4);
        expect(sum(2,3)).toBeGreaterThanOrEqual(5);
    });
    
    test('Should correctly add float numbers', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
});

describe('NativeNull function', () => { 
  test('should return falsy value null', () => {
      expect(nativeNull()).toBe(null);
      expect(nativeNull()).toBeNull();
      expect(nativeNull()).toBeFalsy();
      expect(nativeNull()).toBeDefined();
      expect(nativeNull()).not.toBeTruthy();
      expect(nativeNull()).not.toBeUndefined();

  });
 })

