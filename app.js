function alive() {
	if (food.innerHTML <= 0 || energy.innerHTML <= 0 || happiness.innerHTML <= 0) {
		 $('#image').animate({
       height: 10,
    	 width: 10,
  	   speed: 2000,
     });
     setTimeout( function() {
        document.getElementById("image").src="http://www.shareicon.net/data/256x256/2016/02/14/718981_sleep_512x512.png";
        $('#image').animate({
          height: 256,
          width: 256,
          speed: 2000,
        });
		    $(feed).hide();
        $(play).hide();
        $(sleep).hide();
        $(battle).hide();
     }, 500 );
     } else {
				document.getElementById("image").src="http://downloadicons.net/sites/default/files/dog-icon-45956.png";
     }
}

function funcx() {
  setTimeout(funcx, 3000);
  }

feed.onclick=function(e){
	food.innerHTML = parseInt(food.innerHTML) + 2;
	happiness.innerHTML = parseInt(happiness.innerHTML) + 1;
	energy.innerHTML = parseInt(energy.innerHTML) - 2;
	alive();
}

play.onclick=function(e){
	food.innerHTML = parseInt(food.innerHTML) - 1;
	happiness.innerHTML = parseInt(happiness.innerHTML) + 3;
	energy.innerHTML = parseInt(energy.innerHTML) - 1;
	alive();
}

sleep.onclick=function(e){
	food.innerHTML = parseInt(food.innerHTML) - 2;
	energy.innerHTML = parseInt(energy.innerHTML) + 3;
	alive();
}

restart.onclick=function(e){
	food.innerHTML = "5";
	happiness.innerHTML = "5";
	energy.innerHTML = "5";
	$(feed).show();
	$(play).show();
	$(sleep).show();
	$(battle).show();
	alive();
}

battle.onclick=function(e){
	var battleFood = Math.floor((Math.random() * 10) + 1);
	var battleHappiness = Math.floor((Math.random() * 10) + 1);
  var battleEnergy = Math.floor((Math.random() * 10) + 1);
	var battleSum = battleFood + battleHappiness + battleEnergy;
		console.log(battleSum);
	var tamSum = parseInt(food.innerHTML) + parseInt(happiness.innerHTML) + parseInt(energy.innerHTML);
	if (tamSum < battleSum) {
		document.getElementById("image").src="http://www.shareicon.net/data/256x256/2016/02/14/718981_sleep_512x512.png";
    $('#image').animate({
       height: 10,
    	 width: 10,
  	   speed: 2000,
     });
     setTimeout( function() {
        document.getElementById("image").src="http://www.shareicon.net/data/256x256/2016/02/14/718981_sleep_512x512.png";
        $('#image').animate({
          height: 256,
          width: 256,
          speed: 2000,
        });
		    $(feed).hide();
        $(play).hide();
        $(sleep).hide();
        $(battle).hide();
     }, 500 );
     } else {
				document.getElementById("image").src="http://downloadicons.net/sites/default/files/dog-icon-45956.png";
		}
}
quit.onclick=function(e) {
  document.body.innerHTML = "";
}