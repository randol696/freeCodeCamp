const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); //Hello John
console.log(greeting()); //Hello Anonymous

//The console will display the strings Hello John and Hello Anonymous.
// Only change code below this line
const increment = (number, value =1) => number + value;
console.log(increment(5,6))
// Only change code above this line
//The result of increment(5, 2) should be 7.
//Waiting:The result of increment(5) should be 6.
//Waiting:A default parameter value of 1 should be used for value.