// converts user's choice to lowercase letters
var userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();

if (userChoice === "rock") {
  userChoice = "rock";
} else if (userChoice === "paper") {
  userChoice = "paper";
} else if (userChoice === "scissors") {
  userChoice = "scissors";
// if a user makes an inappropriate choice,
// prompt user for another input
} else {
  userChoice = prompt("Please try again. Do you choose rock, paper or scissors?");
}

// randomize computer player's choice
var computerChoice = Math.random();

// convert math.random to rock, paper or scissors
if (0 < computerChoice < 0.33) {
  computerChoice = "rock";
} else if ( 0.34 < computerChoice < 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

// check in console
console.log("Your Choice: " + userChoice);
console.log("Computer's Choice: " + computerChoice);

// the actual game
var compare = function(choice1, choice2) {
  // if choice1 and choice2 are the same... a tie
  if (choice1 === choice2) {
    return "The result is a tie!";
  // else if choice1 is rock...
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      return "rock wins";
    } else if (choice2 === "paper") {
      return "paper wins";
    }
  // else if choice1 is paper...
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      return "paper wins";
    } else if (choice2 === "scissors") {
      return "scissors wins";
    }
  // else if choice1 is scissors...
  } else if (choice1 === "scissors") {
    if (choice2 === "rock") {
      return "rock wins";
    } else if (choice2 === "paper") {
      return "scissors wins";
    }
  }
};

// check result in console
console.log(compare(userChoice, computerChoice));