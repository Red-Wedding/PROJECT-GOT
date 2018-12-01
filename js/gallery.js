function pictures() {
  var tomb = '';
  for ( var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    tomb += `<div class='picture'> <img src=/${gameOfThronesCharacters[i].picture} alt='Jon Snow havatlapátol a Burger King előtt.'>

   </div> `;
  }
  document.querySelector('.picturecontainer').innerHTML = tomb;
}


pictures();

