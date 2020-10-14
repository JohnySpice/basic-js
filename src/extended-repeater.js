const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = "";
  str = String(str);
  let repeatTimes = options["repeatTimes"] || 1;
  let separator = options["separator"] || "+";
  let addition = options["addition"] === undefined ? "" : String(options["addition"]);
  let additionRepeatTimes = options["additionRepeatTimes"] || 1;
  let additionSeparator = options["additionSeparator"] || "|";
  for (let i = 0; i < repeatTimes; i++) {
    newStr += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      newStr += addition;
      newStr += j === additionRepeatTimes - 1 ? "" : additionSeparator;
    }
    newStr += i === repeatTimes - 1 ? "" : separator;
  }
  return newStr;
};
