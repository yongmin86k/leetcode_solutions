/**
 *  Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 *
 * example 1
 * Input:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeKLists = function(lists) {
  if (lists && lists.length > 0) {
    return sortLists(lists);
  }

  return null;
};

const sortLists = lists => {
  const arrLists = [];

  for (i = 0; i < lists.length; i++) {
    let currentNode = lists[i];

    while (currentNode) {
      arrLists.push(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  arrLists.sort((a, b) => a - b);

  let res = new ListNode();
  let currentNode = res;

  for (i = 0; i < arrLists.length; i++) {
    currentNode.next = new ListNode(arrLists[i]);
    currentNode = currentNode.next;
  }

  return res.next;
};

module.exports = mergeKLists;
