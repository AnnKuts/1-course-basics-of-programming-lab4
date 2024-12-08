"use strict";

const ages = (persons) => {
const result={};
for (let person in persons) {
  const birth = persons[person].born;
  const death = persons[person].died;
  result[person] = death-birth; 
}
return result;
};

module.exports = { ages };
