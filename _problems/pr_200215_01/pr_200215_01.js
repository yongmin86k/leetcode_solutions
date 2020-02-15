/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * exmaple
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

const INPUT = [2, 7, 11, 15];
const TARGET = 9;

const twoSum = (nums, target) => {
  const obj = {};

  for (i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) return [obj[nums[i]], i];
    obj[target - nums[i]] = i;
  }
};

twoSum(INPUT, TARGET);
