/**
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * example 1
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * example 2
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * example 3
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

const INPUT = "abcabcdbb";

const lengthOfLongestSubstring = s => {
  if (s.length < 1) {
    return 0;
  } else {
    const letters = s.split("");
    const longStr = {};
    let slideL = 0,
      slideR = 0;

    letters.forEach((letter, index) => {
      if (longStr[letter]) {
        slideR = Math.max(longStr[letter], slideR);
      }

      slideL = Math.max(slideL, index - slideR + 1);

      longStr[letter] = index + 1;
    });

    return slideL;
  }
};

lengthOfLongestSubstring(INPUT);
