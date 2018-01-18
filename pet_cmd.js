var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var tama = require ("./tamagotchi.js");

var name = null;
var activity = null;
var battleAlive = true;
var answer = null;

function callback(answer) {
   console.log("The name of your pet is " + answer + ".")
   name = answer;
   askQuest();
}

function askQuest() {
    rl.question("What would you like to do - feed, play, sleep, battle, quit or restart? ", callback2);
}

function askQuest2() {
    rl.question(name + " is dead! What would you like to do - quit or restart? ", callback2);
}

function callback2(answer) {
   console.log("Your pet will " + answer + "!")
   if(answer == "feed") {
      tama.feed();
   } else if(answer == "play") {
      tama.play();
   } else if(answer =="sleep") {
      tama.sleep();
   } else if(answer == "battle") {
      battleAlive = tama.battle();
      console.log("Battle Result - Alive: " + battleAlive);
   } else if(answer == "restart") {
      tama.restart();
   } else if(answer == "quit") {
      rl.close();
      process.exit();
   }
   console.log("After" + ": food = " + tama.pet.food + ", happiness = " + tama.pet.happiness + ", energy = " + tama.pet.energy);
   if(answer != "battle") {
     console.log("Alive: " + tama.checkAlive());
     }   
   if((tama.pet.alive !== false) && (battleAlive !== false)) {
     askQuest();
   } else {
     battleAlive = true;
     askQuest2();
   }
}

console.log("Starting: food = " + tama.pet.food + ", happiness = " + tama.pet.happiness + ", energy = " + tama.pet.energy);
  
rl.question('What would you like to name your pet? ', callback);
  