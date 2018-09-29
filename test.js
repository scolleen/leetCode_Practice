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
  let string = ''
  for (let i = 0; i < S.length; i++) {
    let number = parseInt(S[i])
    if (number > 1) {
      string = copyString(string, number)
    } else {
      string += S[i]
    }
  }
  console.log(string)
  if (string.length >= K) {
    console.log(string[K - 1])
    // return string[K - 1]
  } else {
    console.log(0)
    return ''
  }
};

// 复制字符串
var copyString = function (s, n) {
  let i = 0;
  let string = ''
  while (i < n) {
    string = string + s
    i++
  }
  return string
}
decodeAtIndex('y959q969u3hb22odq595', 222280369)