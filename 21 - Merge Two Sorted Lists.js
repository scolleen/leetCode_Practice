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
var mergeTwoLists = function(l1, l2) {

};
// 定义一个将链表转化成数组的方法
var turnToArrary = function (l1) {
  let arr = []
  let node = li
  let nodeNext = node.next
  while (nodeNext !== null) {
    arr.push(node.val)
    nodeNext = nodeNext.next
  }
  console.log(li)
}