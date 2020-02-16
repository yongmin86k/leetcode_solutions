/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * example
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const sumLinkedLists = (l1, l2) => {
  let res = new ListNode();
  let currNode = res;
  let carriedNum = 0;

  while (l1 || l2 || carriedNum) {
    let sum = carriedNum;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      carriedNum = 1;
      sum -= 10;
    } else {
      carriedNum = 0;
    }

    currNode.next = new ListNode(sum);
    currNode = currNode.next;
  }

  return res.next;
};

const addTwoNumbers = function(l1, l2) {
  if (l1 && l2) {
    return sumLinkedLists(l1, l2);
  }
};

module.exports = addTwoNumbers;
