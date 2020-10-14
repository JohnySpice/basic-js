const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  sampleActivity = parseInt(sampleActivity)
  return typeof sampleActivity != 'number' && Number.isInteger(sampleActivity) && sampleActivity >= 0 ?  Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD)) : false;
};
