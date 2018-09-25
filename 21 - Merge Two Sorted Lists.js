/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
  let list = new ListNode()
  let node = list
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      node.next = new ListNode(l1.val)
      l1 = l1.next
      node = node.next
      continue
    } else {
      node.next = new ListNode(l2.val)
      l2 = l2.next
      node = node.next
      continue
    }
  }
  node.next = l1 ? l1 : l2
  return list.next
};