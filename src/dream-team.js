const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  let name = [];
  if(!Array.isArray(members)) return false;
  for(let member of members) {
    if(typeof(member)!== "string") continue;
    else name.push(member.trim()[0].toUpperCase());
 }
 return name.sort().join("") || null;

};
