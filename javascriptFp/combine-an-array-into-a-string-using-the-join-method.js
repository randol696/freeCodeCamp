/* This Code has been create by: Randol */
function sentensify(str) {
  // Only change code below this line
  let arr = str.split(/\W/);
  return (arr = arr.join(" "));
  //return arr = str.join(" ")
  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));
