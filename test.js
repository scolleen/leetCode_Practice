/**
 * 
 * 方法测试
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  if (t1.length > t2.length) {
    return sum(t1, t2)
  } else {
    return sum(t2, t1)
  }
};

var sum = function (n1, n2) {
  let arr = []
  for (let i = 0; i < n1.length; i++) {
    if (n2[i]) {
      if (n1[i] === null) {
        arr.push(n2[i])
      } else {
        arr.push(n1[i] + n2[i])
      }
    } else {
      arr.push(n1[i])
    }
  }
  console.log(arr)
  // return arr
}
let a = [1, 3, 2, 5]
let b = [2, 1, 3, null, 4, null, 7]

mergeTrees(a, b)
