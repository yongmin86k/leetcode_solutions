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
  const n = s.length;
  const arrWords = [];

  let i = 0;

  while (i < n - 1) {
    const targetLetter = s.slice(i, i + 1);
    const m = n - i - 1;

    for (t = 0; t < m; t++) {
      const found = s.endsWith(targetLetter, s.length - t);

      if (found) {
        const letterLength = n - t - i;
        const word = s.slice(i, n - t);
        const wordReverse = word
          .split("")
          .reverse()
          .join("");

        if (word === wordReverse) {
          arrWords.push({
            l: letterLength,
            w: word
          });
        }
      }
    }

    i++;
  }

  if (arrWords.length > 0) {
    arrWords.sort((a, b) => b.l - a.l);
    return arrWords[0].w;
  } else {
    return s.slice(0, 1);
  }
};

module.exports = longestPalindrome;
