/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  if (str.length === 0) {
    return ''
  }
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt()
    // 判断是否ASCII码区间是否为大写字母区间, 如果成立执行转换，否则返回原内容
    if (code >= 65 && code <=90) {
      code += 32
      newStr += String.fromCharCode(code)
    } else {
      newStr += str[i]
    }
  }
  return newStr
}
toLowerCase('al&phaBET')