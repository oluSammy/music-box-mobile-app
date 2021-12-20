/**
 * Implement a method that returns the missing number in a given integer array between 1 and 9. If there is no missing number, the function should return false.
 *
 * For example…
    missingNumber(numArr)
    missingNumber([ 1, 2, 3, 4, 6, 7, 8, 9 ]) to return 5
    missingNumber([ 1, 2, 3, 4, 5, 6, 7, 8]) to return 9
    missingNumber([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]) to return false
 */

/**
 *
 * Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

factorialize(5) should return a number.

Passed
factorialize(5) should return 120.

Passed
factorialize(10) should return 3628800.

Passed
factorialize(20) should return 2432902008176640000.

Passed
factorialize(0) should return 1


 */

const factorial = (number) => {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product *= i;
  }
  return product;
};

function factorialize(num) {
  if (num === 0) {
    return 1;
  }

  let result = num;

  let base = num - 1;

  while (base > 0) {
    result = result * base;
    base--;
  }

  return result;
}

/**
 *
 * Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001]

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000]

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3]
 */

/**
 * Write a function that merges elements of at most two arrays and returns an array of the merged elements in sorted order.

E.g. given, let array1 = [1, 2, 4, 5, 10, 6, 3 ] and let array2 = [0, 8, 19, 90, 11, 16, 13 ]
Should return => [0,1,2,3,4,5,6,8,10,11,13,16,19,90].

 */

/**
 * Implement a function, findProduct(), that takes an array of integers, replaces each element of the array with the product of the other elements.

let array = [ 1, 2, 3, 4 ] => [24, 12, 8, 6]
Let array1 = [0,1,2,3,4] => [24, 0, 0, 0]

 */

/**
 * assignmnet
 * https://docs.google.com/document/d/1-XlU5vOeVJDQLaYlW_nlTH8-mvz-cQZSJU3ES5YMgHc/edit
 */
