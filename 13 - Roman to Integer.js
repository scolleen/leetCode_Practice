/**
 * @param {string} s
 * @return {number}
 */
let mapping = {  
  M : 1000,  
  CM : 900,  
  D : 500,  
  CD : 400,  
  C : 100,  
  XC : 90,  
  L : 50,  
  XL : 40,  
  X : 10,  
  IX : 9,  
  V : 5,  
  IV : 4,  
  I : 1  
};
let romanToInt = function(s) {
  let result = 0;  
  for(let i=0;i<s.length;){  
      let sub = s.slice(i);  
      for(let j in mapping){  
          if(sub.indexOf(j) == 0){  
              result += mapping[j];  
              i += j.length;  
              break;  
          }  
      }  
  }  
  return result;  
};