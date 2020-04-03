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

const takeUntil = function(array, callback) {
  // slice of the array with elements taken from the beginning
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// expected output [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]