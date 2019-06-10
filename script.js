(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-16233284-1', 'auto');
  ga('send', 'pageview');

  /*$(window).load(()=>{
    /*var bgm = document.getElementById('bg-music');
    bgm.play().catch(function(){
      console.log("Shit Happens!");
    });
  });*/


  
  var shootingSound = new Audio('shoot.wav');
  $(window).on('load',function(){
    var bgCanvas = document.getElementById(".column");
    /*
    bgCanvas.addEventListener('click', shot);*/
    $(bgCanvas).on('click',shot);

  });
/*
  function inity()
  {
    /* War plane shake motion
    var randomShake = Math.floor(Math.random()*6)+1;
    console.log(randomShake);
    //document.getElementById('#enemy-'+randomShake).classList.toggle('shake');
    //$('namme').toggleclass('shake');
    document.querySelector('#enemy-'+randomShake).classList.toggle('shake');

  }

  document.querySelector('#enemy-1').addEventListener('click',function(){
    inity();
    shootingSound.play();
  });



/*
  var shootingSound = new Audio('shoot.wav');
  var bgCanvas = document.getElementById("#warBg");
  bgCanvas.addEventListener("click", function (){
    shootingSound.play();
  });*/

function shot()
{
  shooty.play();
  //shootingSound.play();
}

  /*
  $(warBg).on('click', ()=>{
    shootingSound.play();
  });
*/

/*
var promise = document.querySelector('bg-music').play();
if (promise !== undefined) {
    promise.then(_ => {
        // Autoplay started!
      
    }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
    });
}*/