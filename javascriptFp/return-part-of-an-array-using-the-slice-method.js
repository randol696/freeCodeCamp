/* This Code has been create by: Randol */
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
    const arr = [...anim];
    const newArray = arr.slice(beginSlice, endSlice)
    return newArray;
  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));