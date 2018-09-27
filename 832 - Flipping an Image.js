/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  let arr = A
  let list = []
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].reverse() // 反转数组
    for (let j = 0; j < temp.length; j++) {
      temp[j] = temp[j] ? 0 : 1
    }
    list.push(temp)
  }
  return list
};