//reduce() executes a reducer function (that you provide) on each element of the array, resulting in single output value.
//previousValue/accumulator: Whatever the previous iteration returned
//currentValue: The current value in the array that’s being iterated over

/**
 * syntex ====> array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 * function- Required. A function to be run for each element in the array.
 * total- Required. The initialValue, or the previously returned value of the function.
 * currentValue- Required. The value of the current element.
 * currentIndex- Optional. The index of the current element.
 * arr- Optional. The array the current element belongs to.
 * initialValue- Optional. A value to be passed to the function as the initial value.
 */

//return value- The accumulated result from the last call of the callback function.

const array = [1, 2, 3, 4];
const newArray = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

// 1 + 2 + 3 + 4
console.log(newArray); //10
