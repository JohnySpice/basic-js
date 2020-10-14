const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.count = 0;
  }
  calculateDepth(arr) {
    let temp = 0;
    for (let i of arr) {
      if (Array.isArray(i)) {
        this.count = this.calculateDepth(i);
        temp = temp > this.count ? temp : this.count;
      }
    }
    return temp + 1;
  }
};