/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let arr = [
      ["","I","II","III","IV","V","VI","VII","VIII","IX"],
      ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], 
      ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
      ["","M","MM","MMM"]
  ]
  let thousand = arr[3][Math.floor(num/1000)];
  let hundred = arr[2][Math.floor(num%1000/100)];
  let tens = arr[1][Math.floor(num%100/10)];
  let single = arr[0][num%10];
  return  thousand + hundred + tens + single;
};