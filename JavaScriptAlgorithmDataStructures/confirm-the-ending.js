function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
  //let val = str.endsWith(target)
  //return val;
}

console.log(confirmEnding("Bastian", "n"));
