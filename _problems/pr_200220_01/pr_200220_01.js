/**
 *  Given a 32-bit signed integer, reverse digits of an integer.
 * Note:
 * Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 *
 * example 1
 * Input: 123
 * Output: 321
 *
 * example 2
 * Input: -123
 * Output: -321
 *
 * example 3
 * Input: 120
 * Output: 21
 */

const reverse = function(x) {
  const limit = Math.pow(2, 31);
  const isNegative = x < 0;
  const stringX = ("" + x)
    .split("")
    .reverse()
    .join("");
  const intX = parseInt(stringX);

  if (isNegative && intX <= limit) {
    return parseInt(stringX) * -1;
  } else if (isNegative) {
    return 0;
  }

  if (intX < limit) {
    return parseInt(stringX);
  } else {
    return 0;
  }
};

module.exports = reverse;
