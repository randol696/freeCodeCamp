/* This Code has been create by: Randol 
Anytime a constructor function creates a new object, 
that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. 
instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. 
Here's an example:
*/
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
/* This instanceof method would return true.

If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor: */
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(9)
myHouse instanceof House;