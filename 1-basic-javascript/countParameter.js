function rangeOfNumbers(startNum, endNum) {
 
  // Only change code below this line
  if (endNum < startNum){
    return [];
  }else{
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum); // oposite (push)
    return numbers;
  }

  
// Only change code above this line
};

console.log(rangeOfNumbers(6,9))