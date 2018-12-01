/* globals
gameOfThronesCharacters*/
var characterTablesElement = document.querySelector('#characters');
var arrOfOrganizations = [];
var arrMemberOfOrganization = [0, 0];
var stepperMemberOfOrganization = 0;
var j = 0;
for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
  if (gameOfThronesCharacters[i].organization !== undefined && !arrOfOrganizations.includes(gameOfThronesCharacters[i].organization)) {
    arrOfOrganizations.push(gameOfThronesCharacters[i].organization);
    arrMemberOfOrganization[stepperMemberOfOrganization] += 1;
    stepperMemberOfOrganization += 1;
  } else if (gameOfThronesCharacters[i].organization !== undefined) {
    for (j = 0; j < arrOfOrganizations.length; j++) {
      if (gameOfThronesCharacters[i].organization !== arrOfOrganizations[j]) {
        j += 1;
      } else {
        arrMemberOfOrganization[j] += 1;
      }
    }
  }
}

console.log(arrOfOrganizations);
console.log(arrMemberOfOrganization);
