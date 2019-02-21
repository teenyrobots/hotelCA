$(document).ready(function(){

  console.log(sessionStorage.getItem('pool'));
  let time = parseInt(sessionStorage.getItem('time'));
  console.log(time);
  $('body').css("backgroundImage", 'url(assets/hotel'+time+'.jpg');

})
