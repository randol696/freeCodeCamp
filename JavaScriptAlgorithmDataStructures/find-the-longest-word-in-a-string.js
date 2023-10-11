function findLongestWordLength(str) {
  let words = str.split(" ");
  var longestWord = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord) {
      //compare with the last
      longestWord = words[i].length; //if the word length is (number)greates that the value then save it
    }
    //console.log(words[i].length);
    //console.log(words[i]);
  }

  return longestWord;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog"),
);
