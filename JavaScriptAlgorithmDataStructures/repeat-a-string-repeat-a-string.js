function repeatStringNumTimes(str, num) {
  let myArr='';
  for(let i=0; i< num; i++){
      myArr+=str;
  
  }
  return myArr;
  
}

console.log(repeatStringNumTimes("abc", 12));