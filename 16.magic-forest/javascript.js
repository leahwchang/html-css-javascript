var user = prompt("What is your name?").toLowerCase();
var answer = prompt("Hi " + user + ", how should we pass through the magical forest? Run? Swim? Fly?").toLowerCase();
var branches = true;
var vines = true;
var mermaids = true;
var birds = true;
var bugs = false;

switch(answer) {
  case 'run':
    console.log("Alright, let's run as fast as possible.");
    if (branches && vines) {
      console.log("Watch out for those branches and vines! They're swinging our way!");
    } else {
      console.log("Watch out for branches and vines!");
    }
    break;
  case 'swim':
    console.log("Alright, let's swim through the lake. Don't be fooled, mermaids can lure you away!");
    break;
  case 'fly':
    console.log("Alright, let's fly over.");
    if (birds || bugs) {
      console.log("Be careful of birds or bugs! They are gigantic here.");
    } else {
      console.log("Sky is clear. Let's go.");
    }
    break;
  default:
    console.log("Alright, take your time. Don't be scared. We can do this together.");
}