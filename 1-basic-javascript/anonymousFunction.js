//Before 
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
//Before 
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
//after 
const myFunc = () => "value";