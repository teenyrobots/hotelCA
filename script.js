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

//TEMPLATED BLINKING
//Kev suggests using 'set interval' next time instead of setTimeout
function doABlink(blinker) {
  let lit = 'assets/'+ blinker.id+'.png';
  let unlit = 'assets/'+ blinker.id+'x.png';
  darkIt(blinker, unlit);
  setTimeout(function() {
    lightIt(blinker, lit)
  }, 200);
  setTimeout(function() {
    darkIt(blinker, unlit);
  }, 600);
  setTimeout(function() {
    lightIt(blinker, lit)
  }, 700);
  setTimeout(function() {
    darkIt(blinker, unlit);
  }, 800);
  setTimeout(function() {
    lightIt(blinker, lit)
  }, 900);
}

function lightIt(blinker, lit) {
  blinker.src = lit;
}

function darkIt(blinker, unlit) {
  blinker.src = unlit;
}


//WORKS, BUT NOT TEMPLATEABLE
function blink(blinker) {
  let oldSrc = 'assets/'+ blinker.id;
  let blinked =  oldSrc+'x.png';
  console.log('blinked fore');
  blinker.src = blinked;
  setTimeout(function() {
    blinkBack(blinker, oldSrc);  // You used `el`, not `element`?
  }, 500);
}

function blinkBack(blinker, oldSrc) {
  blinker.src = oldSrc+'.png';
  console.log('blinked back');
}
