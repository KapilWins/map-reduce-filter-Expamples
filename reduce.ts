//reduce() executes a reducer function (that you provide) on each element of the array, resulting in single output value.
//previousValue/accumulator: Whatever the previous iteration returned
//currentValue: The current value in the array that’s being iterated over

const array = [1, 2, 3, 4];
const newArray = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
// 1 + 2 + 3 + 4
console.log(newArray); //10
