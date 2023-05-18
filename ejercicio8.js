/** https://leetcode.com/problems/array-reduce-transformation/description/
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init=0) {
  if (nums.length > 0) {
    result = init;
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
        console.log(result)
    }
    return result;
  } else {
    return result;
  }
};

nums = []
fn = function sum(accum, curr) { return 0; }
init = 25

console.log(reduce(nums, fn, init));

// Output: 130
// Explanation:
// initially, the value is init=100.
// (100) + nums[0]^2 = 101
// (101) + nums[1]^2 = 105
// (105) + nums[2]^2 = 114
// (114) + nums[3]^2 = 130
// The final answer is 130.
