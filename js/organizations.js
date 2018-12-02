/* globals
gameOfThronesCharacters*/
var characterTablesElement = document.querySelector('#characters');
var arrOfOrganizations = [];
var arrMemberOfOrganization = [0, 0, 0, 0, 0, 0];
var stepperMemberOfOrganization = 0;
var j = 0;

function organizationsOfGot() {
  for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    if (gameOfThronesCharacters[i].organization !== undefined && !arrOfOrganizations.includes(gameOfThronesCharacters[i].organization)) {
      arrOfOrganizations.push(gameOfThronesCharacters[i].organization);
      arrMemberOfOrganization[stepperMemberOfOrganization] += 1;
      stepperMemberOfOrganization += 1;
    } else if (gameOfThronesCharacters[i].organization !== undefined) {
      for (j = 0; j <= arrOfOrganizations.length; j++) {
        if (gameOfThronesCharacters[i].organization === arrOfOrganizations[j]) {
          arrMemberOfOrganization[j] += 1;
        }
      }
    }
  }
}

function organizationsTableFill() {
  organizationsOfGot();
  var tableRow =
    `
      <tr >
        <td class="cimer">Címer</td>
        <td class="cimer">Szervezet</td>
        <td class="house">Szervezet tagjainak száma</td>
      </tr>
     `;
  for (var i = 0; i < arrOfOrganizations.length; i += 1) {
    tableRow +=
      `
      <tr >
        <td class="cimer"><img src="/img/houses/${arrOfOrganizations[i]}.png"</td>
        <td class="organization">${arrOfOrganizations[i]}</td>
        <td class="member">${arrMemberOfOrganization[i]}</td>
      </tr>
    `;
  }
  characterTablesElement.innerHTML = tableRow;
}
organizationsTableFill();
