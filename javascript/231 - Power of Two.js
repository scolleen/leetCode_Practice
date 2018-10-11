/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return Number.isInteger(Math.log2(n))
};

/**
 * 说明： 直接使用 Math.log2() 方法， 函数返回一个数字以 2 为底的对数
 */