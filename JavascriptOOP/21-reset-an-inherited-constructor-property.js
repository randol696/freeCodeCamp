/* This Code has been create by: Randol */
function Animal() {} //creating the object (this is the parent)
function Bird() {} //creating the object
function Dog() {} //creating the object

Bird.prototype = Object.create(Animal.prototype); //inherit the instance of the parent
Dog.prototype = Object.create(Animal.prototype); //inherit the instance of the parent

// Add your code below this line
Bird.prototype.constructor = Bird; //reseting the inheited
Dog.prototype.constructor = Dog; //reseting the inheited

let duck = new Bird(); //creating the new instance
let beagle = new Dog(); //creating the new instance
