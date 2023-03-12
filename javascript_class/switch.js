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