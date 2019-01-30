// script for Hotel California landing page

$(document).ready(function(){

  // things to store
  sessionStorage.setItem("bgState", "1");
  sessionStorage.setItem("location", "FALSE");
  sessionStorage.setItem("pool", "FALSE");
  sessionStorage.setItem("bar", "FALSE");
  sessionStorage.setItem("ballroom", "FALSE");

  console.log(sessionStorage.getItem("bgState"));
  let currentBg = (sessionStorage.getItem("bgState"));
  $('#theBod').css("backgroundImage", 'url(assets/hotel'+currentBg+'.jpg')

  // copy that variable to local storage

  setTimeout(function() {
    doABlink(document.getElementById('index1'));
    console.log('yea i am a blinker')
  }, 2700)

  setTimeout(function() {
    doABlink(document.getElementById('index2'));
    console.log('yea i am a blinker')
  }, 2300)

})

// functions
