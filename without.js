const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const without = function (originalArray, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < originalArray.length; i ++) {
    if (!itemsToRemove.includes(originalArray[i])) {
      newArray.push(originalArray[i]);
    }
  }
  return newArray;
}
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]