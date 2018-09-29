/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  if (n.lenght > 1) {
    recurrence(n)
  } else {
    return n
  }
};
// 递归
var recurrence = function (n) {
  for(let i = 1; i <= n; 2*i + 1) {

  }
}