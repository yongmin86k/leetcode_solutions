/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 *
 * example 1
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 * example 2
 * Input: "cbbd"
 * Output: "bb"
 */

const longestPalindrome = function(s) {
  if (s.length < 2) {
    return s;
  }

  return findPalindrome(s);
};

const findPalindrome = s => {
  let maxL, maxR, limitPalindrome, left, right, maxIndex, i, result;
  maxL = 0;
  maxR = 0;
  i = 0;
  maxIndex = s.length - 1;

  while (i < s.length) {
    left = i;
    right = i;

    while (right < maxIndex && s[right] === s[right + 1]) {
      right++;
    }

    i = right + 1;

    while (left > 0 && right < maxIndex && s[left - 1] === s[right + 1]) {
      left--;
      right++;
    }

    limitPalindrome = maxR - maxL;

    if (right - left > limitPalindrome) {
      maxL = left;
      maxR = right;

      if (maxR - maxL === maxIndex) {
        result = s;
        return result;
      }
    }
  }

  result = s.slice(maxL, maxR + 1);

  return result;
};

module.exports = longestPalindrome;
