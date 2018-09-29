/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var quickSort = function(arr) {
  if (arr.length <= 1) { return arr; }
  for (let i = 0; i < arr.length; i ++) {
      for (let j = i + 1; j < arr.length; j ++) {
          temp = arr[i]
          if (temp > arr[j]) {
              arr[i] = arr[j]
              arr[j] = temp
          }
      }
  }
    return arr
};
var findMedianSortedArrays = function(nums1, nums2) {
      // 合并数组
  nums1 = nums1.concat(nums2)
  if (nums1.length === 1) {
    return nums1[0]
  } else {
    nums1 = quickSort(nums1)
  }
  let num = 0
  let len = nums1.length
  if (len % 2 === 1) {
    return nums1[Math.floor(len / 2)]
  } else {
    let pre = (len / 2) -1
    let next = len / 2
    num = (nums1[pre] + nums1[next]) / 2
    return num
  }
};