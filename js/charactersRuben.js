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
                                  <td class="name">${gameOfThronesCharacters[0].name} </td>
                                  <td class="portrait"> <img src="${gameOfThronesCharacters[0].portrait}">  </td>
                                  <td class="cimer"> ${cimerJon}</td>
                                  <td class="house"> ${houseJon}</td>
                                  <td><input type="text-area" class="bio" value="${gameOfThronesCharacters[0].bio}" cols="60" rows="8"> </input></td>
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
        <td><input type="text-area" class="bio" value="${gameOfThronesCharacters[i].bio}" cols="60" rows="8"> </input></td>
        <td class="buttonEdit"> <input type="button" value="edit"> </td>
        <td class="buttonDelete"> <input type="button" value="delete"> </td>
    </tr>
                            `;
  }
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
