// opening scripts for most pages

$(document).ready(function(){

  let story = [];

  // gets session storage values
  updateStory();

  if (story[0].value == 'visited' && story[1].value == 'unavailable') {
    sessionStorage.setItem("pool", "available");
    sessionStorage.setItem("bar", "available");
    sessionStorage.setItem("ballroom", "available");
  } else if (
    story[1].value == 'visited' &&
    story[2].value == 'visited' &&
    story[3].value == 'visited') {
      sessionStorage.setItem("rooms", "available");
  }

  updateStory();
  updateCSS();

  $(".unavailable").click(function(e){
    e.preventDefault();
  });

  function updateCSS(){
    let time = 1;
    for (x in story) {
      console.log(story[x].zone);
      $('#'+story[x].zone).addClass(story[x].value);
      console.log(story[x].value);
      if (story[x].value  == 'visited') {
          time += 1;
          console.log(time);
          $('#theBod').css("backgroundImage", 'url(assets/hotel'+time+'.jpg');
          sessionStorage.setItem("time", time);
      }
    }
  }

  function updateStory() {
    console.log("i'm updating the story");
    if (sessionStorage.getItem('locat')) {
      story = [
          {
            zone: 'locat',
            value: sessionStorage.getItem('locat')
          },
          {
            zone: 'bar',
            value: sessionStorage.getItem('bar')
          },
          {
            zone: 'ballroom',
            value: sessionStorage.getItem('ballroom')
          },
          {
            zone: 'pool',
            value: sessionStorage.getItem('pool')
          },
          {
            zone: 'rooms',
            value: sessionStorage.getItem('rooms')
          }
        ]
      } else {
        console.log("it's cool i got u");
        sessionStorage.setItem("locat", "available");
        sessionStorage.setItem("pool", "unavailable");
        sessionStorage.setItem("bar", "unavailable");
        sessionStorage.setItem("ballroom", "unavailable");
        sessionStorage.setItem("rooms", "unavailable");
        sessionStorage.setItem("time", "1");
        story = [
            {
              zone: 'locat',
              value: sessionStorage.getItem('locat')
            },
            {
              zone: 'bar',
              value: sessionStorage.getItem('bar')
            },
            {
              zone: 'ballroom',
              value: sessionStorage.getItem('ballroom')
            },
            {
              zone: 'pool',
              value: sessionStorage.getItem('pool')
            },
            {
              zone: 'rooms',
              value: sessionStorage.getItem('rooms')
            }
          ]
      }
    }
})
