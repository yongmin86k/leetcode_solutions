const solution = require("./_problems");

describe("Two Sum", () => {
  describe("when numbers=[2, 7, 11, 15] and targetNumber=9", () => {
    const INPUT = [2, 7, 11, 15];
    const TARGET = 9;

    it("should return [0, 1]", () => {
      expect(solution.TwoSum(INPUT, TARGET)).toEqual([0, 1]);
    });
  });
});
