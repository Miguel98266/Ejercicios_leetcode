/**
* @param {number[]} nums
* @param {number} val
* @return {number}
*/
var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        nums[i]=nums[i].toString()
        if (nums[i] == val) {
            nums[i] = undefined
        }
    }
    console.log(0 !== "_")
    k = nums.filter((num) => {
        
        if (num !== undefined) {
            console.log(num)
            return num
        } 
    })
    k
    
    return [k.length, nums.sort()]
};

// nums = [3,2,2,3]
val = 2
nums = [0,1,2,2,3,0,4,2]
// val = 2
console.log(removeElement(nums, val))
k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }