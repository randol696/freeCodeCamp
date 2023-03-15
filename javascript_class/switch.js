function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      console.log((answer = "alpha"));
      break;
    case 2:
      console.log((answer = "beta"));
      break;
    case 3:
      console.log((answer = "gamma"));
      break;
    case 4:
      console.log((answer = "delta"));
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val){
    case "a":
      answer="apple";
      break;
    case "b":
      answer ="bird";
      break;
    case "c":
      answer ="cat";
      break;
    default:
      answer ="stuff";
    break;
  }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);
-----------


function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val){
    case 1:
    case 2:
    case 3:
      answer ="Low";
      break;
    case 4:
    case 5:
    case 6:
      answer ="Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer ="High";
      break;
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);
---
function isLess(a, b) {
  // Only change code below this line
  return a <= b;
  // Only change code above this line
}

isLess(10, 15);
----------------------------------------------
let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


---------------------

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

-
-----------
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];  
------------
------
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   

console.log(player)
