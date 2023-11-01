/* This Code has been create by: Randol */
function destroyer(arr, ...valsToRemove) {
  return arr.filter((elem) => !valsToRemove.includes(elem));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
/* or */
function destroyer(arr) {
  const valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function (val) {
    return !valsToRemove.includes(val);
  });
}
