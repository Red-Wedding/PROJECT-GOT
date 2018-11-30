function characterPage() {
  var characterTablesElement = document.querySelector('#characters');
  var cimerJon = '';
  if (gameOfThronesCharacters[0].house) {
    cimerJon = `<img src="/img/houses/${gameOfThronesCharacters[0].house}.png"`;
  }
  var houseJon = '';
  if (gameOfThronesCharacters[0].house) {
    houseJon = `${gameOfThronesCharacters[0].house}`;
  }
  var tableRow =
    `
                              <tr >
                                  <td class="name">${gameOfThronesCharacters[0].name} </td>
                                  <td class="portrait"> <img src="${gameOfThronesCharacters[0].portrait}">  </td>
                                  <td class="cimer"> ${cimerJon}</td>
                                  <td class="house"> ${houseJon}</td>
                                  <td class="bio">${gameOfThronesCharacters[0].bio} </td>
                                  <td class="buttonEdit"> <input type="button" value="edit"> </td>
                                  <td class="buttonDelete"> <input type="button" value="delete"> </td>
                              </tr>
                          `;
  for (var i = 1; i < gameOfThronesCharacters.length; i++) {
    var cimer = '';

    if (gameOfThronesCharacters[i].house) {
      cimer = `<img src="/img/houses/${gameOfThronesCharacters[i].house}.png"`;
    }
    var house = '';

    if (gameOfThronesCharacters[i].house) {
      house = `${gameOfThronesCharacters[i].house}`;
    }
    tableRow +=
      `
        <tr >
        <td class="name">${gameOfThronesCharacters[i].name} </td>
        <td class="portrait"><img src="${gameOfThronesCharacters[i].portrait}"> </td>
        <td class="cimer"> ${cimer}</td>
        <td class="house"> ${house}</td>
        <td  class="bio">${gameOfThronesCharacters[i].bio} </td>
        <td class="buttonEdit"> <input type="button" value="edit"> </td>
        <td class="buttonDelete"> <input type="button" value="delete"> </td>
    </tr>
                            `;
  }
  characterTablesElement.innerHTML = tableRow;
}

characterPage();
