function nav() {
  var navElement = document.querySelector('#nav');
  var row =
    `
  <div class="menu-bar">
  <a class="menu logo" href="index.html"><img src="/img/got logo.png" alt="" width="120px" /></a>
</div>
<div class="menu-bar">
  <a class="menu" href="/html/characters.html">Characters</a>
</div>
<div class="dropdown">
  <a class="menu dropbtn">Statistics</a>
  <div class="dropdown-content">
    <a href="/html/dead_alive.html">Alive/dead</a>
    <a href="/html/houses.html">Houses</a>
    <a href="/html/organizations.html">Organizations</a>
  </div>
</div>
<div><a class="menu" href="/html/portraits.html">Portraits</a></div>
<div><a class="menu" href="/html/gallery.html">Gallery</a></div>
  `;
  navElement.innerHTML = row;
}

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
        <td class="cimer"> almakorte</td>
        <td class="house"> szilvabarack</td>
      </tr>
    `;


  var arrHouses = [];
  var arrCharactersInHouses = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var und = 0;
  var arrCharactersInHousesIndex = 0;
  for (var i = 1; i < gameOfThronesCharacters.length; i += 1) {
    var erb = '';
    var house = '';

    if (!arrHouses.includes(gameOfThronesCharacters[i].house) && gameOfThronesCharacters[i].house !== undefined) {
      arrHouses.push(gameOfThronesCharacters[i].house);
      arrCharactersInHouses[arrHouses.length - 1] += 1;
      erb = `<img src="/img/houses/${gameOfThronesCharacters[i].house}.png"`;
      house = `${gameOfThronesCharacters[i].house}`;

      arrCharactersInHousesIndex += 1;
    } else if (gameOfThronesCharacters[i].house !== undefined) {
      switch (gameOfThronesCharacters[i].house) {
      case (arrHouses[0]):
        arrCharactersInHouses[0] += 1;
        break;
      case (arrHouses[1]):
        arrCharactersInHouses[1] += 1;
        break;
      case (arrHouses[2]):
        arrCharactersInHouses[2] += 1;
        break;
      case (arrHouses[3]):
        arrCharactersInHouses[3] += 1;
        break;
      case (arrHouses[4]):
        arrCharactersInHouses[4] += 1;
        break;
      case (arrHouses[5]):
        arrCharactersInHouses[5] += 1;
        break;
      case (arrHouses[6]):
        arrCharactersInHouses[6] += 1;
        break;
      case (arrHouses[7]):
        arrCharactersInHouses[7] += 1;
        break;
      case (arrHouses[8]):
        arrCharactersInHouses[8] += 1;
        break;
      case (arrHouses[9]):
        arrCharactersInHouses[9] += 1;
        break;
      default:
        break;
      }
    } else {
      und += 1;
    }
    tableRow +=
      `
          <tr >
          <td class="cimer"> ${erb}</td>
          <td class="house"> ${house}</td>
          <td class="house"> ${arrCharactersInHouses[arrCharactersInHousesIndex]}</td>

          </tr>
        `;
  }

  console.log(arrHouses);
  console.log(arrCharactersInHouses);
  console.log(und);
  characterTablesElement.innerHTML = tableRow;
}

function footer() {
  var footerElement = document.getElementById('footer');
  var row =
    `
  <p><b>OFFICIAL GAME OF THRONES WEBSITE - team RED WEDDING</b></p>
  <p>Follow us</p>
  <a href="http://facebook.com"><img src="/img/facebook.png" alt=""/></a>
  <a href="http://instagram.com"
    ><img src="/img/instagram.png" alt=""
  /></a>
  <a href="http://youtube.com"><img src="/img/youtube.png" alt=""/></a>
  <a href="http://twitter.com"><img src="/img/twitter.svg" alt=""/></a>
  `;
  footerElement.innerHTML = row;
}
nav();
characterPage();
footer();
