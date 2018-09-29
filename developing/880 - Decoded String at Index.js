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
  for (let i = 0; i < S.length; i++) {}
};

var copyString = function (string, number) {
  let i = 0;
  while ( i < number) {
    string = string + string
    i ++
  }
  console.log(string)
}
copyString('leet', 2)