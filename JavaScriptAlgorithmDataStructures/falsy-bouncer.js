/* This Code has been create by: Randol 
Code Explanation
We create a new empty array (filteredArr).
We use a for cycle to iterate over all elements of the provided array (arr).
We use the if statement to check if the current element is truthy 583 or falsy 1.4k.
If the element is truthy, we push it to the new array (newArray). This result in the new array (filteredArr) containing only truthy elements.
We return the new array (filteredArr). */

function bouncer(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) filteredArr.push(arr[i]);
  }
  return filteredArr;
}
bouncer([7, "ate", "", false, 9]);