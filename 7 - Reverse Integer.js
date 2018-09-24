/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 判断是否为0
if (x === 0) {
return 0
}
let string = x.toString()
let newString = ''
for (let i = string.length - 1; i >=0; i --) {
newString = newString + string[i]
}
newString = parseFloat(newString.replace(/\b(0+)/gi, ''))
if (newString > 2147483648) {
return 0
} else {
if (/^-[0-9]*[1-9][0-9]*$/g.test(x)) {
  newString = (-newString)
}
return newString
}
};