function deadLiving() {
  var tableRow = '';
  var dead = gameOfThronesCharacters.dead === true;
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    if (dead === true) {
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
