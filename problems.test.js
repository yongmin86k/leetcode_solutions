const solution = require("./_problems");

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// https://leetcode.com/problems/two-sum/
describe("1. Two Sum", () => {
  describe("when numbers=[2, 7, 11, 15] and targetNumber=9", () => {
    const INPUT = [2, 7, 11, 15];
    const TARGET = 9;

    it("should return [0, 1]", () => {
      expect(solution.TwoSum(INPUT, TARGET)).toEqual([0, 1]);
    });
  });
});

// https://leetcode.com/problems/add-two-numbers/
describe("2. Add Two Numbers", () => {
  describe("when linked list=(2 -> 4 -> 3) + (5 -> 6 -> 4)", () => {
    const inputOne = new ListNode(2);
    inputOne.next = new ListNode(4);
    inputOne.next.next = new ListNode(3);

    const inputTwo = new ListNode(5);
    inputTwo.next = new ListNode(6);
    inputTwo.next.next = new ListNode(4);

    const answer = new ListNode(7);
    answer.next = new ListNode(0);
    answer.next.next = new ListNode(8);

    it("should return 7 -> 0 -> 8", () => {
      expect(solution.AddTwoNumbers(inputOne, inputTwo)).toEqual(answer);
    });
  });
});

// https://leetcode.com/problems/longest-substring-without-repeating-characters/
describe("3. Longest Substring Without Repeating Characters", () => {
  describe("when string='abcabcdbb'", () => {
    const INPUT = "abcabcdbb";

    it("should return 4", () => {
      expect(solution.LongestSubstring(INPUT)).toBe(4);
    });
  });
});

// https://leetcode.com/problems/median-of-two-sorted-arrays/
describe("4. Median of Two Sorted Arrays", () => {
  describe("when nums1=[1, 2], nums2=[3, 4]", () => {
    const inputOne = [1, 2];
    const inputTwo = [3, 4];

    it("should return 2.5", () => {
      expect(solution.Median(inputOne, inputTwo)).toBe(2.5);
    });
  });
});

// https://leetcode.com/problems/longest-palindromic-substring/
describe("5. Longest Palindromic Substring", () => {
  describe("when string is very long", () => {
    const INPUT =
      "jhgtrclvzumufurdemsogfkpzcwgyepdwucnxrsubrxadnenhvjyglxnhowncsubvdtftccomjufwhjupcuuvelblcdnuchuppqpcujernplvmombpdttfjowcujvxknzbwmdedjydxvwykbbamfnsyzcozlixdgoliddoejurusnrcdbqkfdxsoxxzlhgyiprujvvwgqlzredkwahexewlnvqcwfyahjpeiucnhsdhnxtgizgpqphunlgikogmsffexaeftzhblpdxrxgsmeascmqngmwbotycbjmwrngemxpfakrwcdndanouyhnnrygvntrhcuxgvpgjafijlrewfhqrguwhdepwlxvrakyqgstoyruyzohlvvdhvqmzdsnbtlwctetwyrhhktkhhobsojiyuydknvtxmjewvssegrtmshxuvzcbrabntjqulxkjazrsgbpqnrsxqflvbvzywzetrmoydodrrhnhdzlajzvnkrcylkfmsdode";
    it("should return 'hhktkhh'", () => {
      expect(solution.LongestPalindromic(INPUT)).toBe("hhktkhh");
    });
  });
});
