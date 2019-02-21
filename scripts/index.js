// script for Hotel California landing page

$(document).ready(function(){

  sessionStorage.setItem("locat", "available");
  sessionStorage.setItem("pool", "unavailable");
  sessionStorage.setItem("bar", "unavailable");
  sessionStorage.setItem("ballroom", "unavailable");
  sessionStorage.setItem("rooms", "unavailable");
  sessionStorage.setItem("time", "0");


  console.log(sessionStorage.getItem('locat'));




  // copy that variable to local storage
  setTimeout(function() {
    doABlink(document.getElementById('index1'));
    // console.log('yea i am a blinker')
  }, 2700)

  setTimeout(function() {
    doABlink(document.getElementById('index2'));
    // console.log('yea i am a blinker')
  }, 2300)

  //pulse(document.getElementById('enter'));

})

// functions
