// javascript for hotel california

// open session storage
// keep track of which tiles have been visisted
  // show appropriate tiles
  // display appropriate background image
// reset sessions storage when user clicks final "home" link

$(document).ready(function(){
  $('.button').hover(
    function(){
      $(this).find('>:first-child').hide();
      $(this).find(':nth-child(2)').show();
    }, function(){
      $(this).find('>:first-child').show();
      $(this).find(':nth-child(2)').hide();
    })

//state variables that must be stored
    let bgState = 1;
//copy that variable to session storage
})

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

function peterOut(peter) {
  let lit = 'assets/'+ peter.id+'.png';
  let unlit = 'assets/'+ peter.id+'x.png';
  darkIt(peter, unlit);
  setTimeout(function() {
    lightIt(peter, lit)
  }, 100);
  setTimeout(function() {
    darkIt(peter, unlit);
  }, 350);
  setTimeout(function() {
    lightIt(peter, lit)
  }, 400);
  setTimeout(function() {
    darkIt(peter, unlit);
  }, 600);
  setTimeout(function() {
    lightIt(peter, lit)
  }, 800);
  setTimeout(function() {
    darkIt(peter, unlit);
  }, 850);
}


//BLINKING FIRST PASS
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
