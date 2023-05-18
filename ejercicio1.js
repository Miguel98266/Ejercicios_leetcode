/** https://leetcode.com/problems/two-sum/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
nums = [2, 11, 9, 3,5,6];
target = 5;

var twoSum = function (nums, target) {
    let map = new Map();
  for (const [index, value] of nums.entries()) {  
    console.log(map)
    console.log(target - value)
    if (map.has(target - value)) {
        console.log(target - value)
      return [map.get(target - value), index];
    } else {
        console.log(value, index)
      map.set(value, index);
      
    }
    
  }
};

console.log(twoSum(nums, target));

// 