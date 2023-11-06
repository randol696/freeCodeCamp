/* This Code has been create by: Randol */
function pairElement(str) {
  const pairs = [];
  const match = function (char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };

  for (let i = 0; i < str.length; i++) {
    pairs.push(match(str[i]));
  }
  return pairs;
}

console.log(pairElement("GCG"));
