// script for Hotel California landing page

$(document).ready(function(){
  // STORAGE
  sessionStorage.setItem("locat", "available");
  sessionStorage.setItem("pool", "unavailable");
  sessionStorage.setItem("bar", "unavailable");
  sessionStorage.setItem("ballroom", "unavailable");
  sessionStorage.setItem("rooms", "unavailable");
  sessionStorage.setItem("time", "1");

  //LOOKING SICK
  //soft flicker on
  setTimeout(function(){
    flickerOn(document.getElementById('index1'));
  }, 750)
  setTimeout(function(){
    flickerOn(document.getElementById('index2'));
  }, 2250)


  //button blink -- actually not going to do this, it would look cool but it not part of MVP
  //https://stackoverflow.com/questions/18433429/setinterval-change-image
  //this is not the most elegant solution, but it's the only place I'm using it so whatever
  /*var i = 0;
  var pics = ['assets/enter.png', 'assets/enterx.png'];
  var el = document.getElementById('enter');  // el doesn't change
  function toggle() {
    el.src = pics[i];           // set the image
    i = (i + 1) % pics.length;  // update the counter
  }*/
  //setInterval(toggle, 1000);



  // setTimeout(function() {
  //   doABlink(document.getElementById('index1'));
  //   // console.log('yea i am a blinker')
  // }, 2700)
  //
  // setTimeout(function() {
  //   doABlink(document.getElementById('index2'));
  //   // console.log('yea i am a blinker')
  // }, 2300)


})
