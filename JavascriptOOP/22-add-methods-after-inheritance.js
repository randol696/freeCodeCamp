/* This Code has been create by: Randol */
function Animal() {} //it construct the function or the object call Animal
Animal.prototype.eat = function () {  //add the method call eat 
  console.log("nom nom nom");
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype); //the Dog  inheritance the property from animal
Dog.prototype.constructor = Dog; //constructor *** By default, when you change the prototype of a constructor function, the constructor property is no longer set to the constructor itself.
Dog.prototype.bark = function () {
  console.log("Woof!");
}; // adding a new method to Dog is bark

// Only change code above this line

let beagle = new Dog();
