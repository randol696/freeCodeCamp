const person ={
    name: "Zodiac Hasbro",
    age:56
};

const greeting = `hello, my name is ${person.name}! I am ${person.age} years old.`;
console.log(greeting)
//--------------------------------------------------------
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };

  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (i=0; i< arr.length; i++ ){
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  