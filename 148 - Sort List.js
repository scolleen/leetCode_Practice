/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  let arr = turnToArray(head)
  let node = sortArray(arr)
  return turnToList(node)
}
// 链表转数组
var turnToArray = function (list) {
  let node = list
  let arr = []
  while (node) {
    arr.push(node.val)
    node = node.next
    continue
  }
  return arr
}
// 数组冒泡排序
var sortArray = function (array) {
  let arr = array
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
// 数组转链表
var turnToList = function (node) {
  // 判断输入是否为空
  if (node.length > 0) {
    let list = new ListNode(node[0])
    let nodeList = list
    for (let i = 1; i < node.length; i++) {
      nodeList.next = new ListNode(node[i])
      nodeList = nodeList.next
    }
    return list
  } else {
    return []
  }
}