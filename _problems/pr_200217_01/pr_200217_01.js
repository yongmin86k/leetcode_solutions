/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 * string convert(string s, int numRows);
 *
 * example 1
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 */

const convert = function(s, numRows) {
  let res, obj, i, n, upDown;
  upDown = false;
  obj = {};
  i = 0;

  const limit = numRows - 1;

  for (n = 0; n < s.length; n++) {
    const letter = s.substr(n, 1);

    if (!obj[i]) {
      obj[i] = [];
    }

    if (!upDown) {
      obj[i].push(letter);
      i++;
    }

    if (upDown) {
      obj[i].push(letter);
      i--;
    }

    if (i === limit || i === 0) {
      upDown = !upDown;
    }
  }

  res = "";

  Object.values(obj).forEach(value => {
    res = res + value.join("");
  });

  return res;
};

module.exports = convert;
