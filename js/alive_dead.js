function deadLiving() {
  var tableRow = '';
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    if (gameOfThronesCharacters[i].dead === true) {
      tableRow +=
                  `
                  <tr>
                      <td> ${gameOfThronesCharacters[i].name} </td>
                      </td>    
                  </tr>        
              `;
    }
    document.querySelector('#dead-alive').innerHTML = tableRow;
  }
}
deadLiving();
