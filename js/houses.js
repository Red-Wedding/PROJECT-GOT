/* globals
var arrOfHouses
gameOfThronesCharacters*/
var arrOfHouses = [];
var arrMemberOfHouses = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var stepperMemberOfHouses = 0;
var j = 0;

function housesOfGot() {
  for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    if (gameOfThronesCharacters[i].house !== undefined && !arrOfHouses.includes(gameOfThronesCharacters[i].house)) {
      arrOfHouses.push(gameOfThronesCharacters[i].house);
      arrMemberOfHouses[stepperMemberOfHouses] += 1;
      stepperMemberOfHouses += 1;
    } else if (gameOfThronesCharacters[i].house !== undefined) {
      for (j = 0; j < arrOfHouses.length; j++) {
        if (gameOfThronesCharacters[i].house === arrOfHouses[j]) {
          arrMemberOfHouses[j] += 1;
        }
      }
    }
  }
}

function housesTableFill() {
  var characterTablesElement = document.querySelector('#characters');
  housesOfGot();
  var tableRow =
    `
    <tr >
        <td class="cimer">Címer</td>
        <td class="cimer">Ház neve</td>
        <td class="house">Ház tagjainak száma</td>
      </tr>
     `;
  for (var i = 0; i < arrOfHouses.length; i += 1) {
    tableRow +=
      `
      <tr >
        <td class="cimer"><img src="/img/houses/${arrOfHouses[i]}.png"</td>
        <td class="house">${arrOfHouses[i]}</td>
        <td class="house">${arrMemberOfHouses[i]}</td>
      </tr>
    `;
  }
  characterTablesElement.innerHTML = tableRow;
}
housesTableFill();
