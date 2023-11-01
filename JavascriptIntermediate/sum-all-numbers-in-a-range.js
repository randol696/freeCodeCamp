/* This Code has been create by: Randol */
function sumAll(arr) {
  const highest = Math.max(...arr);
  const lowest = Math.min(...arr);
  let acc = 0;
  for (let i = lowest; i <= highest; i++) {
    acc += i;
  }
  return acc;
}

console.log(sumAll([1, 4]));
