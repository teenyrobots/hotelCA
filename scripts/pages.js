// opening scripts for most pages

$(document).ready(function(){
  //on load
    let currentBg = (sessionStorage.getItem("bgState"));
    console.log(currentBg);
    $('#theBod').css("backgroundImage", 'url(assets/hotel'+currentBg+'.jpg')

    if (sessionStorage.getItem("location")) console.log('access next three');

  //listeners
    $('.button').hover(
      function(){
        $(this).find('>:first-child').hide();
        $(this).find(':nth-child(2)').show();
      }, function(){
        $(this).find('>:first-child').show();
        $(this).find(':nth-child(2)').hide();
      })

})
