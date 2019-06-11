
/*
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


/*Shake motion not possible since up and down animation is included*/

/*
  $(document).ready(function(){
  //function inity(){
    /* War plane shake motion
    setInterval(()=>{
    var randomShake = Math.floor(Math.random()*6)+1;
    console.log(randomShake);
    document.getElementById('enemy-'+randomShake).classList.toggle('shake delay-3s');
  },3500);
  });
  //inity();
*/
/*Background Animation*/
/*
$(function() {
  var body = $('#starshine'),
      template = $('.template.shine'),
      stars =  50,
      sparkle = 20;
  
    
  var size = 'small';
  var createStar = function() {
    template.clone().removeAttr('id').css({
      top: (Math.random() * 100) + '%',
      left: (Math.random() * 100) + '%',
      webkitAnimationDelay: (Math.random() * sparkle) + 's',
      mozAnimationDelay: (Math.random() * sparkle) + 's'
    }).addClass(size).appendTo(body);
  };
 
  for(var i = 0; i < stars; i++) {
    if(i % 2 === 0) {
      size = 'small';
    } else if(i % 3 === 0) {
      size = 'medium';
    } else {
      size = 'large';
    }
    
    createStar();
  }
});

*/
//Bullet Reloading
//var reloaded = true;






var hits=0, accurateHits=0, damage1=0, damage2=0, damage3=0, damage4=0, damage5=0, damage6=0,count=0;
var defeated=[0,0,0,0,0,0];
var pilotHealth = 90;
var message;

var shootingSound = new Audio('shoot.mp3');
var gettingShot = new Audio('shot.wav');

$(document).ready(function(){

  //Randomly disappearing warplanes

var random1, random2, random3;
setInterval(()=>{
  random1 = Math.floor(Math.random()*6);
  random1++;
  //document.getElementById('grenade-'+random1).classList.toggle('activeGrenade');
  document.getElementById('hide-'+random1).classList.toggle('zoomOut');
  document.getElementById('hide-'+random1).classList.toggle('kick');
},1200);

setInterval(()=>{
  random2 = Math.floor(Math.random()*6);
  random2++;
  //document.getElementById('grenade-'+random2).classList.toggle('activeGrenade');
  document.getElementById('hide-'+random2).classList.toggle('zoomOut');
  document.getElementById('hide-'+random2).classList.toggle('kick');
},800);

setInterval(()=>{
  random3 = Math.floor(Math.random()*6);
  random3++;
  //document.getElementById('grenade-'+random3).classList.toggle('activeGrenade');
  document.getElementById('hide-'+random3).classList.toggle('zoomOut');
  document.getElementById('hide-'+random3).classList.toggle('kick');
},1000);






//Pilot Getting hit by Enemies
setInterval(()=>{
 gettingShot.play();
 pilotHealth-=9;

if(pilotHealth<15)
{
  window.open('lose.html');
  window.close('game.html');
}

 document.getElementById('hitsMade').textContent = hits;
 document.getElementById('successHits').textContent = accurateHits;

 percent = accurateHits/hits;
 percent*=100;
 percent = Math.floor(percent);
 document.getElementById('avgRate').textContent=percent;
 document.getElementById('progress-health').style.width = pilotHealth +'%';
if(pilotHealth<40)
{
  document.getElementById('progress-health').style.backgroundColor = 'red';
}
},8000);
//Warplanes Getting Hit
  document.getElementById("enemy-1").addEventListener("click", function (){
    //reloaded = false;
    accurateHits++;
    hits++;
    damage1+=15;
    percent = 65 - damage1;
    document.getElementById('progress-1').style.width = percent+'%';
    shootingSound.play();
    if(damage1>=65)
    {
      document.getElementById('enemy-1').src='img/enemydamaged.png';
      defeated[0]=1;
      setInterval(()=>{
        document.getElementById('hide-1').style.display = 'none';
      },1000);
    }
  });
  document.getElementById("enemy-2").addEventListener("click", function (){
    //reloaded = false;
    accurateHits++;
    hits++;
    damage2+=11;
    shootingSound.play();
    percent = 45 - damage2;
    document.getElementById('progress-2').style.width = percent+'%';
    if(damage2>=45)
    {
      document.getElementById('enemy-2').src='img/enemydamaged.png';
      defeated[1]=1;
      setInterval(()=>{
        document.getElementById('hide-2').style.display = 'none';
      },1000);
    }
  });
  document.getElementById("enemy-3").addEventListener("click", function (){
    //reloaded = false;
    accurateHits++;
    hits++;
    damage3+=9;
    shootingSound.play();
    percent = 40 - damage3;
    document.getElementById('progress-3').style.width = percent+'%';
    if(damage3>=40)
    {
      document.getElementById('enemy-3').src='img/enemydamaged.png';
      defeated[2]=1;
      setInterval(()=>{
        document.getElementById('hide-3').style.display = 'none';
      },1000);
    }
  });
  document.getElementById("enemy-4").addEventListener("click", function (){
    //reloaded = false;
    accurateHits++;
    hits++;
    damage4+=11;
    shootingSound.play();
    percent = 50 - damage4;
    document.getElementById('progress-4').style.width = percent+'%';
    if(damage4>=50)
    {
      document.getElementById('enemy-4').src='img/enemydamaged.png';
      defeated[3]=1;
      setInterval(()=>{
        document.getElementById('hide-4').style.display = 'none';
      },1000);
    }
  });
  document.getElementById("enemy-5").addEventListener("click", function (){
    //reloaded = false;
    accurateHits++;
    hits++;
    damage5+=11;
    shootingSound.play();
    percent = 50 - damage5;
    document.getElementById('progress-5').style.width = percent+'%';
    if(damage5>=50)
    {
      document.getElementById('enemy-5').src='img/enemydamaged.png';
      defeated[4]=1;
      setInterval(()=>{
        document.getElementById('hide-5').style.display = 'none';
      },1000);
    }
  });
  document.getElementById("enemy-6").addEventListener("click", function (){
    //reloaded = false;
    accurateHits++;
    hits++;
    damage6+=11;
    shootingSound.play();
    percent = 45 - damage6;
    document.getElementById('progress-6').style.width = percent+'%';
    if(damage6>=45)
    {
      document.getElementById('enemy-6').src='img/enemydamaged.png';
      defeated[5]=1;
      setInterval(()=>{
        document.getElementById('hide-6').style.display = 'none';
      },1000);
    }
  });

  document.getElementById('hitsMade').textContent = hits;
 document.getElementById('successHits').textContent = accurateHits;

 percent = accurateHits/hits;
 percent*=100;
 percent = Math.floor(percent);
 document.getElementById('avgRate').textContent=percent;
 document.getElementById('progress-health').style.width = pilotHealth +'%';
if(pilotHealth<40)
{
  document.getElementById('progress-health').style.backgroundColor = 'red';
  document.getElementById('progressText').innerHTML='Your Health is low, Cadet!';
}
if(pilotHealth<=60)
{
  document.getElementById('progressText').innerHTML='Your Defense is not strong enough, Cadet!';
}
update();
setInterval(()=>{
  for(var index=0;index<6;index++)
  {
    if(defeated[index]===1)
    {
      count+=1;
    }
    else{
      count=0;
      break;
    }
  }
  if(count===6)
  {
    console.log('Winner!');
    message = 'Winner!'
    window.open('win.html');
    window.close('game.html');
    count=0;
  }
},4000);





});

function shooting()
{
  shootingSound.play();
  hits++;
  update();
}
 //Progress Representor
 
 function update()
 {
 document.getElementById('hitsMade').textContent = hits;
 document.getElementById('successHits').textContent = accurateHits;

 percent = accurateHits/hits;
 percent*=100;
 percent = Math.floor(percent);
 document.getElementById('avgRate').textContent=percent;
 document.getElementById('progress-health').style.width = pilotHealth +'%';
if(pilotHealth<40)
{
  document.getElementById('progress-health').style.backgroundColor = 'red';
  
if(pilotHealth<15)
{
  window.open('lose.html');
  window.close('game.html');
}

}

}
setInterval(update(),5000);
