/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let arr = A
  let list = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      list.unshift(arr[i]) // 从数组头部插入内容
    } else {
      list.push(arr[i]) // 从数组尾部插入内容
    }
  }
  return list
};