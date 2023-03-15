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