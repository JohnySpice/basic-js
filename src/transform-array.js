const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let newArr = Array.from(arr);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '--discard-next') {
      if (newArr[i + 1] !== undefined) {
        newArr.splice(i + 1, 1, undefined);
        newArr.splice(i, 1)
      }
      else {
        newArr.splice(i, 1)
      }
    }
    else if (newArr[i] === '--discard-prev') {
      if (newArr[i - 1] !== undefined) {
        newArr.splice(i - 1, 1, undefined);
        newArr.splice(i, 1)
      }
      else {
        newArr.splice(i, 1)
      }
    }
    else if (newArr[i] === '--double-next') {
      if (newArr[i + 1] !== undefined) {
        newArr.splice(i, 1, newArr[i + 1]);
      }
      else {
        newArr.splice(i, 1)
      }

    }
    else if (newArr[i] === '--double-prev') {
      if (newArr[i - 1] !== undefined) {
        newArr.splice(i, 1, newArr[i - 1]);

      }
      else {
        newArr.splice(i, 1)
      }
    }
    else {
      continue;
    }
  }
  return newArr.filter(e => e !== undefined);
};
