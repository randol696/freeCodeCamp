/* This Code has been create by: Randol */
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort()
  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
/* 
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
REVERSE: 
ascendingOrder([1, 5, 2, 3, 4]);
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);

This would return the value ['z', 's', 'l', 'h', 'b']. */