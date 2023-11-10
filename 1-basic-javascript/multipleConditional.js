function checkSign(num) {
 return (num === 0)? "zero" 
 : (num < 0)? "negative"
 :"positive" ;
}

checkSign(10);
// example of sending values 
console.log(checkSign(4)); 