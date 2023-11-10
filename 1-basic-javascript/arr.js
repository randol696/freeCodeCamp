function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item); //Push item at the end of arr.
    const removed = arr.shift();
    return removed;
    
    //return item;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); // we specified the arr and the value we want introduce
  console.log("After: " + JSON.stringify(testArr));