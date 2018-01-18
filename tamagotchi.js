var pet = {
    food: 5,
    happiness: 5,
    energy: 5,
	  alive: true
}

function play() {
      pet.food--;
      pet.happiness+=3;
      pet.energy--;
      return pet;
}

function feed() {
      pet.food+=2;
      pet.happiness++;
      pet.energy-=2;
      return pet;
}

function sleep() {
      pet.food-=2;
      pet.energy+=3;
      return pet;
}

function restart() {
    pet.food = 5;
    pet.happiness = 5;
    pet.energy = 5;
	  pet.alive = true;
}

function checkAlive () {
  if (pet.food <= 0 || pet.happiness <= 0 || pet.energy <= 0) {
  pet.alive = false;
  } else
  {
  pet.alive = true;
  }
  return pet.alive;
}

function battle () {
	tamaTot = pet.food + pet.happiness + pet.energy;
	battTot = (Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1);
  if(battTot > tamaTot) {
		pet.alive = false;
	} else {
		pet.alive = true;
	}
	return pet.alive;
}

module.exports = {
	play: play,
	feed: feed,
	sleep: sleep,
	restart: restart,
	battle: battle,
	checkAlive: checkAlive,
	pet: pet,
}