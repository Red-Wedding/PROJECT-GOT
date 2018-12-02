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
  var tableRowLiving = '';
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    if (gameOfThronesCharacters[i].dead !== true) {
      tableRowLiving += `
            <tr id="table-living">
            <td class="portrait"><img src = "/${gameOfThronesCharacters[i].portrait}" alt="" height="50" ></img></td>
              <td class="name">  ${gameOfThronesCharacters[i].name}</td>
            </tr>
  `;
    }
    document.getElementById('container-living').innerHTML = tableRowLiving;
  }
}
living();

function dead() {
  var tableRowDead = '';
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    if (gameOfThronesCharacters[i].dead === true) {
      tableRowDead += `
            <tr id="table-dead" class="table-dead">
            <td class="portrait"><img src = "/${gameOfThronesCharacters[i].portrait}" alt="" height="50" ></img></td>
              <td class="name">${gameOfThronesCharacters[i].name}</td>
            </tr>       
  `;
    }
    document.getElementById('container-dead').innerHTML = tableRowDead;
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
nav();

function numbers() {
  var numberOfDead = document.getElementById('container-dead').rows.length;
  var numberOfLiving = document.getElementById('container-living').rows.length;

  document.getElementById('numberOfDead').innerHTML = `The total number of <u>dead people</u> until season 3 is <u>${numberOfDead}</u>.`;
  document.getElementById('numberOfLiving').innerHTML = `The total number of <u>living people</u> until season 3 is <u>${numberOfLiving}</u>.`;
}
numbers();
