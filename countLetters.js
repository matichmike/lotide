const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(itemsToCount) {
  const result = {}
  for (const item of itemsToCount) {
    if (item !== " ") {
      if (result[item]) {
          result[item] += 1;
        } else {
          result[item] = 1;
      }
    }
  }
  return result;
}

console.log(countLetters("Lighthouse is in the house"));