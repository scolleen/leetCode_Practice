var isPowerOfThree = function (n) {
  let result = Math.log(n) / Math.log(3)
  return result
};
let a = isPowerOfThree(27)
console.log(a)