//functions used across site
$(document).ready(function(){

  //figures out what time it is for the comic pages
  let time = parseInt(sessionStorage.getItem('time'));
  console.log(time);
  $('body').css("backgroundImage", 'url(assets/hotel'+time+'.jpg');

  $('.button  img').hover(
    function(){ this.src = 'assets/'+this.id+'x.png'; },
    function(){ this.src = 'assets/'+this.id+'.png' }
  )

  $('.available').hover(
    function(){
      console.log($(this).find(':nth-child(1)'));
      $(':nth-child(1)', this).css('backgroundColor', '#34A582');
    },
    function(){
      $(':nth-child(1)', this).css('backgroundColor', '#DF287F')
    }
  )

})

//sets tile to visited when it's clicked
function tileState(x) {
  sessionStorage.setItem(x, "visited");
}

















// open session storage
// keep track of which tiles have been visisted
  // show appropriate tiles
  // display appropriate background image
// reset sessions storage when user clicks final "home" link

// //STORY PROGRESSION
// function bgIncrement(){
//
//   if (sessionStorage.getItem("bgState")) {
//     let currentBg = parseInt((sessionStorage.getItem("bgState")), 10);
//     currentBg += 1;
//     sessionStorage.setItem("bgState", currentBg);
//     console.log(sessionStorage.getItem("bgState"));
//   } else {
//     let currentBg =  1;
//     sessionStorage.setItem("bgState", currentBg);
//     console.log(sessionStorage.getItem("bgState"));
//   }
//   // sessionStorage.setItem("bgState", currentBg+1);
//   // console.console.log(sessionStorage.getItem("bgState"));
// }


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

//blinking stuff
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

//yeah this doesn't really work at all
function pulse(pulser) {
  let unlit = 'assets/' + pulser.id + '.png';
  let lit = 'assets/' + pulser.id + 'x.png';
  console.log(unlit);
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
