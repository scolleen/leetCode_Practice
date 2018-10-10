/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  let m
  while (a !== 0) {
    m = (a & b) << 1
    b = a ^ b
    a = m
  }
  return b
};