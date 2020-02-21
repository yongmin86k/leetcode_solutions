const solution = require("./_problems");

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
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

// https://leetcode.com/problems/zigzag-conversion/
describe("6. ZigZag Conversion", () => {
  describe("when string='PAYPALISHIRING', row=3", () => {
    const inputOne = "PAYPALISHIRING";
    const inputTwo = 3;

    it("should return 'PAHNAPLSIIGYIR'", () => {
      expect(solution.ZigZagConversion(inputOne, inputTwo)).toBe(
        "PAHNAPLSIIGYIR"
      );
    });
  });
});

//leetcode.com/problems/reverse-integer/
describe("7. Reverse Integer", () => {
  describe("when interger=120", () => {
    const INPUT = 120;

    it("should return 21", () => {
      expect(solution.ReverseInteger(INPUT)).toBe(21);
    });
  });

  describe("when interger=1534236469", () => {
    const INPUT = 1534236469;

    it("should return 0", () => {
      expect(solution.ReverseInteger(INPUT)).toBe(0);
    });
  });

  describe("when interger=-123", () => {
    const INPUT = -123;

    it("should return -321", () => {
      expect(solution.ReverseInteger(INPUT)).toBe(-321);
    });
  });
});

// https://leetcode.com/problems/add-two-numbers/
describe("23. Merge k Sorted Lists", () => {
  describe("when linked list=(2 -> 4 -> 3) + (5 -> 6 -> 4)", () => {
    const lnOne = new ListNode(1);
    lnOne.next = new ListNode(4);
    lnOne.next.next = new ListNode(5);

    const lnTwo = new ListNode(1);
    lnTwo.next = new ListNode(3);
    lnTwo.next.next = new ListNode(4);

    const lnThree = new ListNode(2);
    lnThree.next = new ListNode(6);

    const INPUT = [lnOne, lnTwo, lnThree];
    const answer = new ListNode(1);
    answer.next = new ListNode(1);
    answer.next.next = new ListNode(2);
    answer.next.next.next = new ListNode(3);
    answer.next.next.next.next = new ListNode(4);
    answer.next.next.next.next.next = new ListNode(4);
    answer.next.next.next.next.next.next = new ListNode(5);
    answer.next.next.next.next.next.next.next = new ListNode(6);

    it("should return 1->1->2->3->4->4->5->6", () => {
      expect(solution.MergeKSortedLists(INPUT)).toEqual(answer);
    });
  });
});

// https://leetcode.com/problems/add-two-numbers/
describe("104. Maximum Depth of Binary Tree", () => {
  describe("when binary tree=[3,9,20,null,null,15,7]", () => {
    const INPUT = new TreeNode(3);
    INPUT.left = new TreeNode(9);
    INPUT.right = new TreeNode(20);
    INPUT.right.left = new TreeNode(15);
    INPUT.right.right = new TreeNode(7);

    it("should return 3", () => {
      expect(solution.MaximumDepthofBinaryTree(INPUT)).toBe(3);
    });
  });
});
