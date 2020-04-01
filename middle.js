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

const middle = function(array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  }
  if (array.length % 2 !== 0) {
    newArray.push(array[Math.floor(array.length/2)]);
  } else {
    newArray.push(array[Math.floor(array.length/2)-1]);
    newArray.push(array[Math.floor(array.length/2)]);
  }
  return newArray;
}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]