function addPrefix(x) {
  return function addVerb(y) {
    return x + y;
  };
}

const addUn = addPrefix("un");
const addRe = addPrefix("re");

const word1 = addUn("do");
const word2 = addRe("do");
const word3 = addUn("load");
const word4 = addRe("load");

console.log(word1);
console.log(word2);
console.log(word3);
console.log(word4);
