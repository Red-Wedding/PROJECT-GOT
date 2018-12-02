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
  var tableRowLiving = '<h1><u>Living</u></h1>';
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    if (gameOfThronesCharacters[i].dead !== true) {
      tableRowLiving += `

      <table id="table-living">
          <tbody>
            <tr>
            <td><img src = "/${gameOfThronesCharacters[i].portrait}" alt="" height="50" ></img></td>
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
  var tableRowDead = '<h1><u>Dead</u></h1>';
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    if (gameOfThronesCharacters[i].dead === true) {
      tableRowDead += `

      <table id="table-dead" class="table-dead">
          <tbody>
            <tr>
            <td><img src = "/${gameOfThronesCharacters[i].portrait}" alt="" height="50" ></img></td>
              <td>${gameOfThronesCharacters[i].name}</td><br>
            </tr>
            </tbody>
        </table>       
  `;
    }
    document.getElementById('container-dead').innerHTML = tableRowDead;
    console.log(tableRowDead);
  }
}
dead();

function footer() {
  var footerElement = document.getElementById('footer');
  var row =
    `
    <p><b>OFFICIAL GAME OF THRONES WEBSITE - team RED WEDDING</b></p>
    <p>Follow us</p>
    <a href="http://facebook.com"><img src="/img/facebook.png" alt="facebook" /></a>
    <a href="http://instagram.com"><img src="/img/Instagram.png" alt="Instagram" /></a>
    <a href="http://youtube.com"><img src="/img/youtube.png" alt="youtube" /></a>
    <a href="http://twitter.com"><img src="/img/twitter.svg" alt="twitter" /></a>
  `;
  footerElement.innerHTML = row;
}
footer();
