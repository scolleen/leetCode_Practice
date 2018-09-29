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
var addTwoNumbers = function(l1, l2) {
  var self = new ListNode(0)
  var calc = self
  for (; ;) {
    var a = 0, b = 0;
    if (l1 === null) {
      a = 0
    } else {
      a = l1.val
      l1 = l1.next
    }

    if (l2 === null) {
      b = 0
    } else {
      b = l2.val
      l2 = l2.next
    }

    var sum = a + b + calc.val
    calc.next = new ListNode(0)
    if (sum >= 10) {
      calc.val = sum % 10
      calc.next.val = 1
    } else {
      calc.val = sum
    }
    if (l1 === null && l2 === null) {
        if (calc.next.val == 0) calc.next = null
        return self
    }
      calc = calc.next
  }
} 