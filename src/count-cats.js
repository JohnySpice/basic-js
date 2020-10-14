const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
let c = 0;
 for(let i of backyard) {
   for(let j of i) {
     j === '^^' ? c++ : c;
   }
 }
 return c
};
