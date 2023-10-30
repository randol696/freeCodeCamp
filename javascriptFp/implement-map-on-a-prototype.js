/* This Code has been create by: Randol */
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  // Only change code above this line
  return newArray;
};
console.log([23, 65, 98, 5, 13].myMap(item => item * 2))
//console.log(["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase()))
//console.log([1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]))