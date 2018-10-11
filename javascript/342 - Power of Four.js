/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  let result = Math.log(num) / Math.log(4)
  return Number.isInteger(result)
};

/**
 * 说明： Math.log() MDN中解释为函数返回一个数的自然对数
 * # 使用Math.log时基于不同的底数
 * Math.log(y) / Math.log(x) 即 (logx y) 解释为以x为底y的对数
*/