// a variable to check if we're still slaying
var slaying = true;
// a variable to check if we hit the dragon
// a random number that's either 0/false or 1/true
var youHit = Math.floor(Math.random() * 2);
// a variable to keep track of how much damage we've dealt the dragon this round
// a random number that's between 1 and up to and including 5
var damageThisRound = Math.floor(Math.random() * 5 + 1);
// a variable to keep track of total damage
var totalDamage = 0;

while(slaying) {
  if (youHit === 1) {
    console.log("Congrats! You hit the dragon. Now finish it.");
    totalDamage += damageThisRound;
    console.log(totalDamage);
    if (totalDamage >= 4) {
      console.log("Congrats! Now you have slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("No! The dragon defeated you. Play again.");
    slaying = false;
  }
}