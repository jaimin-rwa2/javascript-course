const array = [1, 2, 3];

function getMaxNumber(arr) {
  return Math.max.apply(null, arr);  // return Math.max.apply(undefined, arr);  // return Math.max.apply(this, arr);
}

console.log(getMaxNumber(array));