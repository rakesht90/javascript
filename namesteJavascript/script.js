function reducer(nums, fn, init) {
  let result = init; // Initialize result with init value

  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }

  return result;
}

// Example usage:
const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
  return accum + curr;
};
const init = 0;
console.log(reducer(nums, fn, init)); // Output: 10
