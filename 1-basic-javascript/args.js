function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
//The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..
//pasar argumentos cuando no es fija o varia 
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(sum())
console.log(sum(1,2,3))
console.log(sum(0,1,2,3))
console.log(sum(0,1,2,3,4))