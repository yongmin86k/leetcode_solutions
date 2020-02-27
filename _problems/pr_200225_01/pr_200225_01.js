/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
 *
 * example 1
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 */

const trap = function(height) {
  if (!height) {
    return 0;
  }

  const maxLeft = [];
  const maxRight = [];
  let ans = 0;

  let leftMaxHeight, rightMaxHeight;

  for (let l = 0; l < height.length; l++) {
    leftMaxHeight =
      Math.max(height[leftMaxHeight], height[l]) === height[leftMaxHeight]
        ? leftMaxHeight
        : l;

    const res = height[leftMaxHeight] - height[l];

    maxLeft.push(res);
  }

  for (let r = height.length - 1; r >= 0; r--) {
    rightMaxHeight =
      Math.max(height[rightMaxHeight], height[r]) === height[rightMaxHeight]
        ? rightMaxHeight
        : r;

    const res = height[rightMaxHeight] - height[r];

    maxRight.unshift(res);
  }

  for (let i = 0; i < maxLeft.length; i++) {
    ans += Math.min(maxLeft[i], maxRight[i]);
  }

  return ans;
};

module.exports = trap;
