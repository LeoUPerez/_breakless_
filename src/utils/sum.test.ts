import sum from "./sum";

describe('sum', () => {
    it('should return a sum of two values', () => {
        expect(sum(1,1)).toBe(2);
    });
})