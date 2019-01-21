// javascript for hotel california

// open session storage
// keep track of which tiles have been visisted
  // show appropriate tiles
  // display appropriate background image
// reset sessions storage when user clicks final "home" link

//state variables that must be stored
let bgState = 1;

//functions that apply appropriate styles
function bgTracker() {
  let theBod = document.getElementById("theBod");
  if (bgState < 6) {
    theBod.style.backgroundImage = "url(assets/hotel"+bgState+".jpg)";
    bgState += 1;
  } else {bgState = 1;}
}
