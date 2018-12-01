function sortOn(arr, prop) {
  arr.sort(function (a, b) {
    if (a[prop] < b[prop]) {
      return -1;
    } else if (a[prop] > b[prop]) {
      return 1;
    }
    return 0;
  });
}
sortOn(gameOfThronesCharacters, 'name');

function living() {
  var tableRowLiving = 'Living';
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    if (gameOfThronesCharacters[i].dead !== true) {
      tableRowLiving += `

      <table>
          <tbody>
            <tr>
              <td>${gameOfThronesCharacters[i].name}</td><br>
            </tr>
            </tbody>
        </table>       
  `;
    }
    document.getElementById('container-living').innerHTML = tableRowLiving;
  }
}
living();

function dead() {
  var tableRowDead = 'Dead';
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    if (gameOfThronesCharacters[i].dead === true) {
      tableRowDead += `

      <table>
          <tbody>
            <tr>
              <td>${gameOfThronesCharacters[i].name}</td><br>
            </tr>
            </tbody>
        </table>       
  `;
    }
    document.getElementById('container-dead').innerHTML = tableRowDead;
  }
}
dead();
