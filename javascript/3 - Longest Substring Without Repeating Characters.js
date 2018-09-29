/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s === '') {
      return 0
  } else {
      let str = s[0] // 字符串
      let max = 1 // 记录最长度
      for (let i = 1; i < s.length; i ++) {
          let index = str.indexOf(s[i])
          if (index === -1) {
              str = str + s[i]
          } else {
              str = str.substring(index + 1, str.length) + s[i]
          }
          if (str.length > max) {
              max = str.length
          }
      }
      return max
  }
};