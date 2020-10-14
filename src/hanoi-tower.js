const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.trunc(1 / (turnsSpeed / turns) * 3600);
  return { "turns": turns, "seconds": seconds };
};
