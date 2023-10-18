/* This Code has been create by: Randol 
Constructors are functions that create new objects. 
They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
Constructors define properties and behaviors instead of returning a value as other functions might.

*/
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
/* Example 2 */
function Dog(){
  this.name ="Mila";
  this.color ="Black";
  this.numLegs = 4;
}