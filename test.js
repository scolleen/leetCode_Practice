/**
 * 
 * 方法测试
 */

// 冒泡排序
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
}
let a = [3, 4, 10, 5, 20, 11, 9]

sortArray(a)