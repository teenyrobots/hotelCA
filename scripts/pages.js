// opening scripts for most pages

$(document).ready(function(){
  //on load

    // check to see what's in sessionStorage
    // if appropriate, then whatever
    // if not appropriate, offer to start from beginning
    // if they say no, then try to build storage and go from there

    bgIncrement();

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
