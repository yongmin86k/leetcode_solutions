/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 *
 * example 1
 * Input: "()"
 * Output: true
 *
 * example 2
 * Input: "()[]{}"
 * Output: true
 *
 * example 3
 * Input: "(]"
 * Output: false
 *
 * example 4
 * Input: "([)]"
 * Output: false
 *
 * example 5
 * Input: "{[]}"
 * Output: true
 */

const isValid = function(s) {
  if (s.length < 0) {
    return false;
  }

  let stack, i;
  stack = [];
  i = 0;

  while (i < s.length) {
    const curString = s[i];
    const matchString =
      curString === ")"
        ? "("
        : curString === "}"
        ? "{"
        : curString === "]"
        ? "["
        : undefined;

    stack.push(curString);

    if (
      stack.length > 0 &&
      stack.lastIndexOf(matchString, stack.length - 1) > -1
    ) {
      const popIndex = stack.lastIndexOf(matchString, stack.length - 1);

      stack.splice(popIndex, 2);
    }

    i++;
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
};

module.exports = isValid;
