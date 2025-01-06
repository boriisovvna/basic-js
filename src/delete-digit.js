const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n).split('').map(Number);
  return Math.max(...str.map((x,i)=>{
    const newStr = str.slice(); 
    newStr.splice(i,1); 
    return Number( newStr.join(''))
  }))
}
module.exports = {
  deleteDigit
};
