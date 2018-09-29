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
// t1 = [1, 3, 2, 5]
// t2 = [2, 1, 3, null, 4, null, 7]
function createTree(t1, t2) {
  let judgeNode = (node) => {
    if (node) {
      return node
    } else {
      return new TreeNode(null)
    }
  }
  t1 = judgeNode(t1)
  t2 = judgeNode(t2)
  return new TreeNode(t1.val + t2.val)
}

function getNodeChild(node, key) {
  return node && node[key] ? node[key] : null
}

function sumTrees(t1, t2) {
  if (t1 == null && t2 == null) {
    return null
  }
  let node = createTree(t1, t2)
  if (node == null) {
    return null
  }
  node.left = sumTrees(getNodeChild(t1, 'left'), getNodeChild(t2, 'left'))
  node.right = sumTrees(getNodeChild(t1, 'right'), getNodeChild(t2, 'right'))
  return node
}
var mergeTrees = function (t1, t2) {
  if (t1 == null && t2 === null) {
    return []
  } else {
    return sumTrees(t1, t2)
  }
};
