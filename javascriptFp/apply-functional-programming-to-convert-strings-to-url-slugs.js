/* This Code has been create by: Randol */
// Only change code below this line
function urlSlug(title) {
let arr= title.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
 arr = arr.map(x => x.toLowerCase());
 arr = arr.join('-');
return arr;
}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));