const eqObjects = function(object1, object2) {
  const firstLength = Object.keys(object1);
  const secondLength = Object.keys(object2);
  if (firstLength.length !== secondLength.length) {
    return false;
  } else {
    for (let item of firstLength) {
      if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        if (!eqArrays(object1[item], object2[item])) {
          return false;
        }
      } else if (object1[item] !== object2[item]) {
        return false;
      }
    }
  }
  return true;
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
}

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });