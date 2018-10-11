/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let result = Math.log(n) / Math.log(3)
  return Number.isInteger(result)
};