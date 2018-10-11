/**
 * 
 * 方法测试
 */

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function (S, K) {
  // 判断是否只要第一个数
  if (K === 1) {
    return S[0]
  }
  let num = 0
  for (let i = 0; i < S.length; i++) {
    let number = parseInt(S[i])
    if (number > 1) {
      num = num * number
    } else {
      num = num + 1
    }
    if (num > K) {
      return { num, number, i }
    }
  }
};

// 复制字符串
let a = decodeAtIndex('y959q969u3hb22odq595', 222280369)
console.log(a)