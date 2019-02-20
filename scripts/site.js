// opening scripts for most pages

$(document).ready(function(){
  //on load

  //this resets it everytime :(
    if (sessionStorage.getItem('locat') == 'visited') {
      sessionStorage.setItem("pool", "available");
      sessionStorage.setItem("bar", "available");
      sessionStorage.setItem("ballroom", "available");
    }

    if (sessionStorage.getItem('locat') == 'visited' &&
        sessionStorage.getItem('pool') == 'visited') {
          console.log('u done visited two things champ');
        }


    let story = [
                  {
                    zone: locat,
                    value: sessionStorage.getItem('locat')
                  },
                  {
                    zone: bar,
                    value: sessionStorage.getItem('bar')
                  },
                  {
                    zone: ballroom,
                    value: sessionStorage.getItem('ballroom')
                  },
                  {
                    zone: pool,
                    value: sessionStorage.getItem('pool')
                  },
                  {
                    zone: rooms,
                    value: sessionStorage.getItem('rooms')
                  }
                ]

    for (x in story) {
      console.log(story[x].zone);
      $(story[x].zone).addClass(story[x].value);
      console.log(story[x].value);
    }

    $(".unavailable").click(function(e){
      e.preventDefault();
    });

})
