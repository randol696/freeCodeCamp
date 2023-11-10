// Only change code below this line
function countdown(n){
  if (n < 1){
    return [];
  }else {
    const countArray = countdown(n - 1);
    countArray.unshift(n); // oposite (push)
    return countArray;
  }
  
}
console.log(countdown(10));
// Only change code above this line