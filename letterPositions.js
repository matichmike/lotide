const assertArraysEqual = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    console.log(`${firstArray} !== ${secondArray}`);
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`${firstArray} !== ${secondArray}`);
    }
  }
  console.log(`${firstArray} === ${secondArray}`);
}

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
}

const letterPositions = function(sentence) {
  const result = {}
  for (let i = 0; i < sentence.length; i ++) {
    let letter = sentence[i];
    if (letter !== " ") {
      if (result[letter]) {  
        result[letter].push(i);
        } else {
          result[letter] = [];
          result[letter].push(i);
      }
    }
  }
  return result;
}

console.log(letterPositions("Lighthouse is in the house"));