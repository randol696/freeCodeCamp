let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
//
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // OR "posibles"
let result = petRegex.test(petString);
